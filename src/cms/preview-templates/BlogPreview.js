import React from "react";
import PropTypes from "prop-types";
import moment from 'moment';

import { BlogPost } from "../../components/Blog";

const BlogPreview = ({ entry, widgetFor, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();

    if (data.date) {
        var date = moment(data.date).format("MMMM DD YYYY")
    }

    var image = entry.getIn(['data', 'author_image']);
    var getImage = getAsset(image);

    if (getImage) {
        var author_image = getImage.toString();
    }

    if (data.hasOwnProperty('Ffacility')) {
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
            author_image={author_image}
            author={data.author}
            bio={data.bio}
            linkdin={data.linkdin}
            twitter={data.twitter}
            date={date}
            title={data.title}
            html={widgetFor('body')}
            preview={true}
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
