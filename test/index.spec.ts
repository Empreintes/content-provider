import { describe } from "mocha"
import { expect } from "chai"
import { contentProvider } from "../src"
import ContentProviderArgsTypes from "../src/content_provider_params"

const testArgs: ContentProviderArgsTypes = {
  base_path: "test/views",
  file_extension: "html"
}
const cp = contentProvider(testArgs)

describe("Content Provider commonJS", () => {
  it("basic", () => {
    expect(cp("stuff"), "should be 👌").to.be.string("👌")
    expect(cp("a.path.very.long.and.boring.hey"), "should be 👍").to.be.string(
      "👍"
    )
  })
})
