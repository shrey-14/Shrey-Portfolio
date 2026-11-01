// Generates the responsive screenshot variants the gallery serves (macOS only; uses ImageIO).
//
//   swift scripts/screenshot-variants.swift public/projects/<project>/<name>.png
//
// Writes <name>-640.avif, <name>-960.avif, <name>-640.jpg and <name>-960.jpg next to the original.
// AVIF stays at 640/960 on purpose: larger AVIFs from the macOS encoder are tiled "grid" images
// that some browsers render blank. Larger renders use the original file.
import CoreGraphics
import Foundation
import ImageIO
import UniformTypeIdentifiers

let args = CommandLine.arguments
guard args.count == 2 else {
  print("usage: swift scripts/screenshot-variants.swift <path-to-screenshot>")
  exit(1)
}
let path = args[1]
let base = (path as NSString).deletingPathExtension
guard let src = CGImageSourceCreateWithURL(URL(fileURLWithPath: path) as CFURL, nil),
      let img = CGImageSourceCreateImageAtIndex(src, 0, nil) else {
  print("could not read \(path)")
  exit(1)
}

for width in [640, 960] where width < img.width {
  let height = Int((Double(img.height) * Double(width) / Double(img.width)).rounded())
  let ctx = CGContext(data: nil, width: width, height: height, bitsPerComponent: 8, bytesPerRow: 0,
                      space: CGColorSpace(name: CGColorSpace.sRGB)!,
                      bitmapInfo: CGImageAlphaInfo.noneSkipLast.rawValue)!
  ctx.interpolationQuality = .high
  ctx.draw(img, in: CGRect(x: 0, y: 0, width: width, height: height))
  let resized = ctx.makeImage()!
  for (ext, type, quality) in [("avif", "public.avif", 0.6), ("jpg", UTType.jpeg.identifier, 0.82)] {
    let out = URL(fileURLWithPath: "\(base)-\(width).\(ext)")
    let dest = CGImageDestinationCreateWithURL(out as CFURL, type as CFString, 1, nil)!
    CGImageDestinationAddImage(dest, resized, [kCGImageDestinationLossyCompressionQuality: quality] as CFDictionary)
    CGImageDestinationFinalize(dest)
    print("wrote \(out.path)")
  }
}
