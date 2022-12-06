import React from "react";
import PropTypes from "prop-types";
import moment from 'moment';

import { BlogPost } from "../../components/Blog";

const BlogPreview = ({ entry, widgetFor, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();

    if (data.date) {
        var date = moment(data.date).format("MMMM DD YYYY")
    }

    // For banner main image
    var image = entry.getIn(['data', 'banner_image']);
    var getImage = getAsset(image);

    if (getImage) {
        var banner_image = getImage.toString();
    }


    // For banner author image
    var image2 = entry.getIn(['data', 'author_image']);
    var getImage2 = getAsset(image2);

    if (getImage2) {
        var author_image = getImage2.toString();
    }


    // For array mapping images
    if (data.hasOwnProperty('youtubeArray')
        || data.hasOwnProperty('buyCoinArray')
        || data.hasOwnProperty('bitcoinArray')
        || data.hasOwnProperty('moreCoinsArray')
        || data.hasOwnProperty('articlesArray')) {
        if (data.youtubeArray) {
            data.youtubeArray.map(item => {
                var getImage = getAsset(item.image);
                item.image = getImage.toString();
                return item;
            })
        }


        if (data.buyCoinArray) {
            data.buyCoinArray.map(item => {
                var getImage = getAsset(item.image);
                item.image = getImage.toString();
                return item;
            })
        }

        if (data.bitcoinArray) {
            data.bitcoinArray.map(item => {
                var getImage = getAsset(item.image);
                item.image = getImage.toString();
                return item;
            })
        }

        if (data.moreCoinsArray) {
            data.moreCoinsArray.map(item => {
                var getImage = getAsset(item.icon);
                item.icon = getImage.toString();
                return item;
            })
        }

        if (data.articlesArray) {
            data.articlesArray.map(item => {
                var getImage = getAsset(item.image);
                item.image = getImage.toString();
                return item;
            })
        }
    }


    return (
        <BlogPost
            fields={data.fields}
            author_image={author_image}
            author={data.author}
            facebook={data.facebook}
            instagram={data.instagram}
            linkdin={data.linkdin}
            twitter={data.twitter}
            youtube={data.youtube}
            date={date}
            title={data.title}
            tags={data.tags}
            preview={true}
            banner_image={banner_image}
            bannerTitle={data.bannerTitle}
            bannerDesc={data.bannerDesc}
            blogBodyArray={data.blogBodyArray}
            alsoReadTitle={data.alsoReadTitle}
            alsoReadSlug={data.alsoReadSlug}
            youtubeContainerTitle={data.youtubeContainerTitle}
            youtubeArray={data.youtubeArray}
            buyCoinTitle={data.buyCoinTitle}
            buyCoinArray={data.buyCoinArray}
            bitCoinTitle={data.bitCoinTitle}
            bitcoinArray={data.bitcoinArray}
            collapseTitle={data.collapseTitle}
            questionsArray={data.questionsArray}
            moreCoinsTitle={data.moreCoinsTitle}
            moreCoinsArray={data.moreCoinsArray}
            articlesTitle={data.articlesTitle}
            articlesArray={data.articlesArray}
            sideNavArray={data.sideNavArray}
        />
    );

};

BlogPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default BlogPreview;
