import * as fs from "fs"
import ContentProviderArgsTypes from "./content_provider_params"

const ContentProvider = (
  args: ContentProviderArgsTypes
): ((relative_path: string) => string) => {
  const { base_path, file_extension } = args

  return (relative_path: string): string => {
    const __relative_path = relative_path.replace(/\./g, "/")
    const path = `${base_path}/${__relative_path}.${file_extension}`
    if (!fs.existsSync(path)) {
      throw new Error(`${path} : not found`)
    } else {
      return fs.readFileSync(path).toString()
    }
  }
}

export default ContentProvider
