const apiKey =
  "g2RSKmv1lxsrSh6ZLR1bq09UcCtzhWwMY-kULnKXXkQMRVPGhjyx8TbhARPlwTAu2XK7Z_rK7_rwx42i4Fw_sVf1XYoNoLemisz8XVwCJ2XwRsjjBc73V4NuyvgDX3Yx";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    ).then(response => {
        return response.json();
    }).then(jsonResponse => {
        if (jsonResponse.businesses){
            return jsonResponse.businesses.map(business => {
                return {
                    id: business.id,
                    imgSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories.title,
                    rating: business.rating,
                    reviewCount: business.review_count,
                }
            });
        }
    })
  },
};

export default Yelp;