import {
  Film,
  Speaker,
  Radio,
  Mic,
  Camera,
  TrendingUp,
  Video,
  Star,
  Globe,
  Smartphone,
} from 'lucide-react'

// Map of icon names (used in JSON) -> lucide components
const ICONS = { Film, Speaker, Radio, Mic, Camera, TrendingUp, Video, Star, Globe, Smartphone }

/**
 * Renders a lucide icon by string name with a safe fallback.
 */
export default function Icon({ name, ...props }) {
  const Cmp = ICONS[name] || Film
  return <Cmp {...props} />
}
