import React from 'react';
import { Gallery, GalleryImage } from 'react-gesture-gallery';
import styled from 'styled-components';

const aws = require('aws-sdk');
const linkPrefix = 'https://pet-society.s3.us-east-2.amazonaws.com/';

const Photo = styled.div`
    display: contents;
    @media only screen and (max-width: 950px) {
        display: none;
    }

`
const MobilePhoto = styled.div`
    display: none;
    @media only screen and (max-width: 950px) {
        display: contents;
    }

`

const PhotoGridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    position: relative;
    justify-content: center;
    justify-items: center;
    overflow: auto;
    width: 100%;
    height: 100%;
    overflow:hidden;

`
class PhotoGrid extends React.Component {
    state = {
        photoLinks: [],
        index: 1,
    };

    fetchPhotos = async () => {
        try {
            aws.config.setPromisesDependency();
            aws.config.update({
                accessKeyId: "AKIARCWOFO4EOUHVQBH6",
                secretAccessKey: "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",
                region: 'us-east-2',
            });
            const s3 = new aws.S3();
            const response = await s3.listObjectsV2({
                Bucket: 'pet-society',
                Prefix: this.props.petId + '',
            }).promise();
            let photosInfo = response['Contents'];

            let photoLinks = [''];

            for (var i = 0; i < photosInfo.length; i++) {
                if ((photosInfo[i]['Key'] + '').includes('.')) {
                    photoLinks.push(linkPrefix + photosInfo[i]['Key'].replace(/ /g, '+'));
                }
            }

            photoLinks.push('');

            await this.setState({
                photoLinks: photoLinks
            });
        }
        catch (e) {
            //Fallo la traida de fotos
            console.log('FALLOOOOOO');
        }
    }

    setIndex = async (i) => {
        await this.setState({
            index: i
        });
    }


    componentDidMount() {
        this.fetchPhotos();
    }

    render() {
        return (
            <PhotoGridContainer>
                <Gallery
                    style={{
                        height: "100%",
                        width: "100%"
                    }}
                    index={this.state.index}
                    onRequestChange={i => {
                        i === this.state.photoLinks.length - 1 ?
                            this.setIndex(1)
                            :
                            i === 0 ?
                                this.setIndex(this.state.photoLinks.length - 2)
                                :
                                this.setIndex(i)
                            ;
                    }}
                >
                        {  this.state.photoLinks.map(image => (
                            <div key={image}>
                                <Photo>
                                    <GalleryImage objectFit="contain" key={image} src={image} style={{
                                        width: "95%",
                                        height: "300px"
                                    }} />
                                </Photo>
                                <MobilePhoto>
                                    <GalleryImage objectFit="contain" key={image} src={image} style={{
                                        width: "95%",
                                        height: "250px"
                                    }} />
                                </MobilePhoto>
                            </div>
                        ))}
                </Gallery>
            </PhotoGridContainer>
        );
    }
}

export default PhotoGrid;