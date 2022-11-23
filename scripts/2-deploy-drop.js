import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDropAddress = await sdk.deployer.deployEditionDrop({
      // The collection's name, ex. CryptoPunks
      name: "NomanimalsDAO",
      // A description for the collection.
      description: "A DAO for nomads who want to save animals in a collective farm.",
      // The image that will be held on our NFT! The fun part :).
      image: readFileSync("scripts/assets/doggy.png"),
      // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the contract.
      // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
      // you can set this to your own wallet address if you want to charge for the drop.
      primary_sale_recipient: "0x6E8e0fCe42171fd0653240728e7D133ff95B4612",
    });

    // this initialization returns the address of our contract
    // we use this to initialize the contract on the thirdweb sdk
    const editionDrop = await sdk.getContract(editionDropAddress, "edition-drop");

    // with this, we can get the metadata of our contract
    const metadata = await editionDrop.metadata.get();

    console.log(
      "✅ Successfully deployed editionDrop contract, address:",
      editionDropAddress,
    );
    console.log("✅ editionDrop metadata:", metadata);
  } catch (error) {
    console.log("failed to deploy editionDrop contract", error);
  }
})();