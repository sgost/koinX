import React from "react";
import PropTypes from "prop-types";
import moment from 'moment';
import { StakePost } from "../../components/Stake";

const StakePreview = ({ entry, getAsset }) => {

    const data = entry.getIn(["data"]).toJS();

    if (data.date) {
        var date = moment(data.date).format("MMMM DD YYYY")
    }

    // For banner author image
    var image2 = entry.getIn(['data', 'author_image']);
    var getImage2 = getAsset(image2);

    if (getImage2) {
        var author_image = getImage2.toString();
    }


    // For array mapping images
    if (data.hasOwnProperty('youtubeArray')
        || data.hasOwnProperty('bitcoinArray')
        || data.hasOwnProperty('moreCoinsArray')
        || data.hasOwnProperty('currencyBlockArray')
        || data.hasOwnProperty('cryptoGuideArray')) {
        if (data.youtubeArray) {
            data.youtubeArray.map(item => {
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

        if (data.coinWorkArray) {
            data.coinWorkArray.map(item => {
                var getImage = getAsset(item.icon);
                item.icon = getImage.toString();
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

        if (data?.currencyBlockArray) {
            data.currencyBlockArray.map(item => {
                var getImage = getAsset(item.icon);
                item.icon = getImage.toString();
                return item;
            })
        }

        if (data?.cryptoGuideArray) {
            data.cryptoGuideArray.map(item => {
                var getImage = getAsset(item.icon);
                item.icon = getImage.toString();
                return item;
            })
        }
    }

    return (
        <StakePost
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
            bannerTitle1={data.bannerTitle1}
            blogBodyArray1={data.blogBodyArray1}
            bannerTitle={data.bannerTitle}
            bannerDesc={data.bannerDesc}
            blogBodyArray={data.blogBodyArray}
            alsoReadTitle={data.alsoReadTitle}
            alsoReadSlug={data.alsoReadSlug}
            youtubeContainerTitle={data.youtubeContainerTitle}
            youtubeArray={data.youtubeArray}
            coinWorkTitle={data.coinWorkTitle}
            coinWorkArray={data.coinWorkArray}
            coinPointTitle={data.coinPointTitle}
            coinPointArray={data.coinPointArray}
            bitCoinTitle={data.bitCoinTitle}
            bitcoinArray={data.bitcoinArray}
            collapseTitle={data.collapseTitle}
            questionsArray={data.questionsArray}
            moreCoinsTitle={data.moreCoinsTitle}
            moreCoinsArray={data.moreCoinsArray}
            currencyBlockTitle={data.currencyBlockTitle}
            currencyBlockArray={data.currencyBlockArray}
            cryptoGuideTitle={data.cryptoGuideTitle}
            cryptoGuideArray={data.cryptoGuideArray}
        />
    );

};

StakePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default StakePreview;
