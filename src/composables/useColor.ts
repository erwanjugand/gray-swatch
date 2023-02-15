import convert from 'color-convert'
import { Settings } from "@/types/global"

export function useColor(settings: Settings, index: number) {
  const colorHSL = convert.hex.hsl(settings.color)
  const position = settings.size - index
  const lightness = 100 / (settings.size - 1) * position
  const saturation = (!settings.tint ? 0 : Math.pow(100 - +lightness, settings.exponent) / (Math.pow(100, settings.exponent - 1) * 10)) * (settings.tint / 10)
  const hue = (colorHSL[0] + (settings.complementary ? 180 : 0)) % 360

  return '#' + convert.hsl.hex([hue, saturation, lightness])
}
