import { describe } from "mocha"
import { expect } from "chai"
import ContentProvider from "../src/content_provider"
import ContentProviderArgsTypes from "../src/content_provider_params"

const testArgs: ContentProviderArgsTypes = {
  base_path: "test/views",
  file_extension: "html"
}
const cp = ContentProvider(testArgs)

describe("Content Provider", () => {
  it("basic usage", () => {
    expect(cp('stuff'),'should be 👌').to.be.string('👌')
    expect(cp('a.path.very.long.and.boring.hey'),'should be 👍').to.be.string('👍')
  })
})