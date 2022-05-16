"use strict"
import * as fs from "fs"
import Content_provider from "./src/content_provider"
import ErrnoException = NodeJS.ErrnoException

const PACKAGE_JSON = JSON.parse(
  Content_provider({ file_extension: "json", base_path: "." })("package")
)
const README = Content_provider({ file_extension: "md", base_path: "." })(
  "README"
)
const DIST_FOLDER = "./dist"

const log = (error: ErrnoException | null) => {
  if (error) throw error
}

delete PACKAGE_JSON["scripts"]
delete PACKAGE_JSON["devDependencies"]
delete PACKAGE_JSON["packageManager"]
delete PACKAGE_JSON["main"]
PACKAGE_JSON.main = "content_provider.js"

fs.writeFile(
  `${DIST_FOLDER}/package.json`,
  JSON.stringify(PACKAGE_JSON),
  "utf8",
  log
)
fs.writeFile(`${DIST_FOLDER}/README.md`, README, "utf8", log)
