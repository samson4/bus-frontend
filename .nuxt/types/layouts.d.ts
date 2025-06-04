import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "landing" | "studio"
declare module 'nuxt/app' {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}