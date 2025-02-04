import { hashUsername, pseudoRandom } from "./crypto";
import { getTimestampSeed } from "./utils";

export function generatePassFromUser(username: string): string {
  const usernameHash = hashUsername(username);

  // Use a changing timestamp-based seed
  const timestampSeed = getTimestampSeed();
  const combinedSeed =
    parseInt(usernameHash.substring(0, 8), 16) ^ timestampSeed;

  // Introduce the "random" component
  let randomPart = "";
  for (let i = 0; i < 6; i++) {
    randomPart += String.fromCharCode(33 + pseudoRandom(combinedSeed + i, 94));
  }

  // Generate the final password
  const password =
    usernameHash.substring(0, 8) + randomPart + usernameHash.substring(8, 12);
  return Buffer.from(password).toString("base64");
}
