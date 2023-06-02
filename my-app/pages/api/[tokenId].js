
      
      export default function handler(req, res) {
        // get the tokenId from the query params
        const tokenId = req.query.tokenId;
        // As all the images are uploaded on github, we can extract the images from github directly.
        const image_url ='https://gateway.pinata.cloud/ipfs/QmfESSTwrrhh9HVZdkiqhaSPMXQSa4M1Loa5q3aDBWwYBx/';
        // The api is sending back metadata for a Crypto Dev
        // To make our collection compatible with Opensea, we need to follow some Metadata standards
        // when sending back the response from the api
        // More info can be found here: https://docs.opensea.io/docs/metadata-standards
        res.status(200).json({
          name: "Togyz Kumalak #" + tokenId,
          description: "Togyz Kumalak NFT Collection",
          image: image_url + tokenId + ".png",
        });
      }
   