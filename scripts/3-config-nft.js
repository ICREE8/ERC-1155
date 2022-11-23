import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x8ef101aFf86d22F4301176837AD7d5A3eEeB8cE1", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Nomad & Ninjas - Protector of Animals",
        description: "This NFT will make you a protector of the animals!",
        image: readFileSync("scripts/assets/protec.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();