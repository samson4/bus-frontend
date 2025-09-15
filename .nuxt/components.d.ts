
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'AppSidebar': typeof import("../components/AppSidebar.vue")['default']
    'CodeMirrorEditor': typeof import("../components/CodeMirrorEditor.vue")['default']
    'IconsAccount': typeof import("../components/Icons/Account.vue")['default']
    'IconsBell': typeof import("../components/Icons/Bell.vue")['default']
    'IconsCalendar': typeof import("../components/Icons/Calendar.vue")['default']
    'IconsCancel': typeof import("../components/Icons/Cancel.vue")['default']
    'IconsDollar': typeof import("../components/Icons/Dollar.vue")['default']
    'IconsHammer': typeof import("../components/Icons/Hammer.vue")['default']
    'IconsInfo': typeof import("../components/Icons/Info.vue")['default']
    'IconsLogout': typeof import("../components/Icons/Logout.vue")['default']
    'IconsPen': typeof import("../components/Icons/Pen.vue")['default']
    'IconsPointing': typeof import("../components/Icons/Pointing.vue")['default']
    'IconsProgress': typeof import("../components/Icons/Progress.vue")['default']
    'IconsSettings': typeof import("../components/Icons/Settings.vue")['default']
    'IconsTag': typeof import("../components/Icons/Tag.vue")['default']
    'IconsTool': typeof import("../components/Icons/Tool.vue")['default']
    'LandingPage': typeof import("../components/LandingPage.vue")['default']
    'LoginPage': typeof import("../components/LoginPage.vue")['default']
    'NavMain': typeof import("../components/NavMain.vue")['default']
    'NavProjects': typeof import("../components/NavProjects.vue")['default']
    'NavUser': typeof import("../components/NavUser.vue")['default']
    'SideBar': typeof import("../components/SideBar.vue")['default']
    'SignupPage': typeof import("../components/SignupPage.vue")['default']
    'TeamSwitcher': typeof import("../components/TeamSwitcher.vue")['default']
    'SkeletonFooter': typeof import("../components/skeleton/Footer.vue")['default']
    'SkeletonHeader': typeof import("../components/skeleton/Header.vue")['default']
    'SkeletonModal': typeof import("../components/skeleton/Modal.vue")['default']
    'SkeletonNavBar': typeof import("../components/skeleton/NavBar.vue")['default']
    'UiAvatar': typeof import("../components/ui/avatar/Avatar.vue")['default']
    'UiAvatarFallback': typeof import("../components/ui/avatar/AvatarFallback.vue")['default']
    'UiAvatarImage': typeof import("../components/ui/avatar/AvatarImage.vue")['default']
    'UiBreadcrumb': typeof import("../components/ui/breadcrumb/Breadcrumb.vue")['default']
    'UiBreadcrumbEllipsis': typeof import("../components/ui/breadcrumb/BreadcrumbEllipsis.vue")['default']
    'UiBreadcrumbItem': typeof import("../components/ui/breadcrumb/BreadcrumbItem.vue")['default']
    'UiBreadcrumbLink': typeof import("../components/ui/breadcrumb/BreadcrumbLink.vue")['default']
    'UiBreadcrumbList': typeof import("../components/ui/breadcrumb/BreadcrumbList.vue")['default']
    'UiBreadcrumbPage': typeof import("../components/ui/breadcrumb/BreadcrumbPage.vue")['default']
    'UiBreadcrumbSeparator': typeof import("../components/ui/breadcrumb/BreadcrumbSeparator.vue")['default']
    'UiButton': typeof import("../components/ui/button/Button.vue")['default']
    'UiCheckbox': typeof import("../components/ui/checkbox/Checkbox.vue")['default']
    'UiCollapsible': typeof import("../components/ui/collapsible/Collapsible.vue")['default']
    'UiCollapsibleContent': typeof import("../components/ui/collapsible/CollapsibleContent.vue")['default']
    'UiCollapsibleTrigger': typeof import("../components/ui/collapsible/CollapsibleTrigger.vue")['default']
    'UiDropdownMenu': typeof import("../components/ui/dropdown-menu/DropdownMenu.vue")['default']
    'UiDropdownMenuCheckboxItem': typeof import("../components/ui/dropdown-menu/DropdownMenuCheckboxItem.vue")['default']
    'UiDropdownMenuContent': typeof import("../components/ui/dropdown-menu/DropdownMenuContent.vue")['default']
    'UiDropdownMenuGroup': typeof import("../components/ui/dropdown-menu/DropdownMenuGroup.vue")['default']
    'UiDropdownMenuItem': typeof import("../components/ui/dropdown-menu/DropdownMenuItem.vue")['default']
    'UiDropdownMenuLabel': typeof import("../components/ui/dropdown-menu/DropdownMenuLabel.vue")['default']
    'UiDropdownMenuRadioGroup': typeof import("../components/ui/dropdown-menu/DropdownMenuRadioGroup.vue")['default']
    'UiDropdownMenuRadioItem': typeof import("../components/ui/dropdown-menu/DropdownMenuRadioItem.vue")['default']
    'UiDropdownMenuSeparator': typeof import("../components/ui/dropdown-menu/DropdownMenuSeparator.vue")['default']
    'UiDropdownMenuShortcut': typeof import("../components/ui/dropdown-menu/DropdownMenuShortcut.vue")['default']
    'UiDropdownMenuSub': typeof import("../components/ui/dropdown-menu/DropdownMenuSub.vue")['default']
    'UiDropdownMenuSubContent': typeof import("../components/ui/dropdown-menu/DropdownMenuSubContent.vue")['default']
    'UiDropdownMenuSubTrigger': typeof import("../components/ui/dropdown-menu/DropdownMenuSubTrigger.vue")['default']
    'UiDropdownMenuTrigger': typeof import("../components/ui/dropdown-menu/DropdownMenuTrigger.vue")['default']
    'UiInput': typeof import("../components/ui/input/Input.vue")['default']
    'UiNavigationMenu': typeof import("../components/ui/navigation-menu/NavigationMenu.vue")['default']
    'UiNavigationMenuContent': typeof import("../components/ui/navigation-menu/NavigationMenuContent.vue")['default']
    'UiNavigationMenuIndicator': typeof import("../components/ui/navigation-menu/NavigationMenuIndicator.vue")['default']
    'UiNavigationMenuItem': typeof import("../components/ui/navigation-menu/NavigationMenuItem.vue")['default']
    'UiNavigationMenuLink': typeof import("../components/ui/navigation-menu/NavigationMenuLink.vue")['default']
    'UiNavigationMenuList': typeof import("../components/ui/navigation-menu/NavigationMenuList.vue")['default']
    'UiNavigationMenuTrigger': typeof import("../components/ui/navigation-menu/NavigationMenuTrigger.vue")['default']
    'UiNavigationMenuViewport': typeof import("../components/ui/navigation-menu/NavigationMenuViewport.vue")['default']
    'UiSeparator': typeof import("../components/ui/separator/Separator.vue")['default']
    'UiSheet': typeof import("../components/ui/sheet/Sheet.vue")['default']
    'UiSheetClose': typeof import("../components/ui/sheet/SheetClose.vue")['default']
    'UiSheetContent': typeof import("../components/ui/sheet/SheetContent.vue")['default']
    'UiSheetDescription': typeof import("../components/ui/sheet/SheetDescription.vue")['default']
    'UiSheetFooter': typeof import("../components/ui/sheet/SheetFooter.vue")['default']
    'UiSheetHeader': typeof import("../components/ui/sheet/SheetHeader.vue")['default']
    'UiSheetOverlay': typeof import("../components/ui/sheet/SheetOverlay.vue")['default']
    'UiSheetTitle': typeof import("../components/ui/sheet/SheetTitle.vue")['default']
    'UiSheetTrigger': typeof import("../components/ui/sheet/SheetTrigger.vue")['default']
    'UiSidebar': typeof import("../components/ui/sidebar/Sidebar.vue")['default']
    'UiSidebarContent': typeof import("../components/ui/sidebar/SidebarContent.vue")['default']
    'UiSidebarFooter': typeof import("../components/ui/sidebar/SidebarFooter.vue")['default']
    'UiSidebarGroup': typeof import("../components/ui/sidebar/SidebarGroup.vue")['default']
    'UiSidebarGroupAction': typeof import("../components/ui/sidebar/SidebarGroupAction.vue")['default']
    'UiSidebarGroupContent': typeof import("../components/ui/sidebar/SidebarGroupContent.vue")['default']
    'UiSidebarGroupLabel': typeof import("../components/ui/sidebar/SidebarGroupLabel.vue")['default']
    'UiSidebarHeader': typeof import("../components/ui/sidebar/SidebarHeader.vue")['default']
    'UiSidebarInput': typeof import("../components/ui/sidebar/SidebarInput.vue")['default']
    'UiSidebarInset': typeof import("../components/ui/sidebar/SidebarInset.vue")['default']
    'UiSidebarMenu': typeof import("../components/ui/sidebar/SidebarMenu.vue")['default']
    'UiSidebarMenuAction': typeof import("../components/ui/sidebar/SidebarMenuAction.vue")['default']
    'UiSidebarMenuBadge': typeof import("../components/ui/sidebar/SidebarMenuBadge.vue")['default']
    'UiSidebarMenuButton': typeof import("../components/ui/sidebar/SidebarMenuButton.vue")['default']
    'UiSidebarMenuButtonChild': typeof import("../components/ui/sidebar/SidebarMenuButtonChild.vue")['default']
    'UiSidebarMenuItem': typeof import("../components/ui/sidebar/SidebarMenuItem.vue")['default']
    'UiSidebarMenuSkeleton': typeof import("../components/ui/sidebar/SidebarMenuSkeleton.vue")['default']
    'UiSidebarMenuSub': typeof import("../components/ui/sidebar/SidebarMenuSub.vue")['default']
    'UiSidebarMenuSubButton': typeof import("../components/ui/sidebar/SidebarMenuSubButton.vue")['default']
    'UiSidebarMenuSubItem': typeof import("../components/ui/sidebar/SidebarMenuSubItem.vue")['default']
    'UiSidebarProvider': typeof import("../components/ui/sidebar/SidebarProvider.vue")['default']
    'UiSidebarRail': typeof import("../components/ui/sidebar/SidebarRail.vue")['default']
    'UiSidebarSeparator': typeof import("../components/ui/sidebar/SidebarSeparator.vue")['default']
    'UiSidebarTrigger': typeof import("../components/ui/sidebar/SidebarTrigger.vue")['default']
    'UiSidebarUtils': typeof import("../components/ui/sidebar/utils")['default']
    'UiSkeleton': typeof import("../components/ui/skeleton/Skeleton.vue")['default']
    'UiTable': typeof import("../components/ui/table/Table.vue")['default']
    'UiTableBody': typeof import("../components/ui/table/TableBody.vue")['default']
    'UiTableCaption': typeof import("../components/ui/table/TableCaption.vue")['default']
    'UiTableCell': typeof import("../components/ui/table/TableCell.vue")['default']
    'UiTableEmpty': typeof import("../components/ui/table/TableEmpty.vue")['default']
    'UiTableFooter': typeof import("../components/ui/table/TableFooter.vue")['default']
    'UiTableHead': typeof import("../components/ui/table/TableHead.vue")['default']
    'UiTableHeader': typeof import("../components/ui/table/TableHeader.vue")['default']
    'UiTableRow': typeof import("../components/ui/table/TableRow.vue")['default']
    'UiTableUtils': typeof import("../components/ui/table/utils")['default']
    'UiTooltip': typeof import("../components/ui/tooltip/Tooltip.vue")['default']
    'UiTooltipContent': typeof import("../components/ui/tooltip/TooltipContent.vue")['default']
    'UiTooltipProvider': typeof import("../components/ui/tooltip/TooltipProvider.vue")['default']
    'UiTooltipTrigger': typeof import("../components/ui/tooltip/TooltipTrigger.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'ColorScheme': typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAppSidebar': LazyComponent<typeof import("../components/AppSidebar.vue")['default']>
    'LazyCodeMirrorEditor': LazyComponent<typeof import("../components/CodeMirrorEditor.vue")['default']>
    'LazyIconsAccount': LazyComponent<typeof import("../components/Icons/Account.vue")['default']>
    'LazyIconsBell': LazyComponent<typeof import("../components/Icons/Bell.vue")['default']>
    'LazyIconsCalendar': LazyComponent<typeof import("../components/Icons/Calendar.vue")['default']>
    'LazyIconsCancel': LazyComponent<typeof import("../components/Icons/Cancel.vue")['default']>
    'LazyIconsDollar': LazyComponent<typeof import("../components/Icons/Dollar.vue")['default']>
    'LazyIconsHammer': LazyComponent<typeof import("../components/Icons/Hammer.vue")['default']>
    'LazyIconsInfo': LazyComponent<typeof import("../components/Icons/Info.vue")['default']>
    'LazyIconsLogout': LazyComponent<typeof import("../components/Icons/Logout.vue")['default']>
    'LazyIconsPen': LazyComponent<typeof import("../components/Icons/Pen.vue")['default']>
    'LazyIconsPointing': LazyComponent<typeof import("../components/Icons/Pointing.vue")['default']>
    'LazyIconsProgress': LazyComponent<typeof import("../components/Icons/Progress.vue")['default']>
    'LazyIconsSettings': LazyComponent<typeof import("../components/Icons/Settings.vue")['default']>
    'LazyIconsTag': LazyComponent<typeof import("../components/Icons/Tag.vue")['default']>
    'LazyIconsTool': LazyComponent<typeof import("../components/Icons/Tool.vue")['default']>
    'LazyLandingPage': LazyComponent<typeof import("../components/LandingPage.vue")['default']>
    'LazyLoginPage': LazyComponent<typeof import("../components/LoginPage.vue")['default']>
    'LazyNavMain': LazyComponent<typeof import("../components/NavMain.vue")['default']>
    'LazyNavProjects': LazyComponent<typeof import("../components/NavProjects.vue")['default']>
    'LazyNavUser': LazyComponent<typeof import("../components/NavUser.vue")['default']>
    'LazySideBar': LazyComponent<typeof import("../components/SideBar.vue")['default']>
    'LazySignupPage': LazyComponent<typeof import("../components/SignupPage.vue")['default']>
    'LazyTeamSwitcher': LazyComponent<typeof import("../components/TeamSwitcher.vue")['default']>
    'LazySkeletonFooter': LazyComponent<typeof import("../components/skeleton/Footer.vue")['default']>
    'LazySkeletonHeader': LazyComponent<typeof import("../components/skeleton/Header.vue")['default']>
    'LazySkeletonModal': LazyComponent<typeof import("../components/skeleton/Modal.vue")['default']>
    'LazySkeletonNavBar': LazyComponent<typeof import("../components/skeleton/NavBar.vue")['default']>
    'LazyUiAvatar': LazyComponent<typeof import("../components/ui/avatar/Avatar.vue")['default']>
    'LazyUiAvatarFallback': LazyComponent<typeof import("../components/ui/avatar/AvatarFallback.vue")['default']>
    'LazyUiAvatarImage': LazyComponent<typeof import("../components/ui/avatar/AvatarImage.vue")['default']>
    'LazyUiBreadcrumb': LazyComponent<typeof import("../components/ui/breadcrumb/Breadcrumb.vue")['default']>
    'LazyUiBreadcrumbEllipsis': LazyComponent<typeof import("../components/ui/breadcrumb/BreadcrumbEllipsis.vue")['default']>
    'LazyUiBreadcrumbItem': LazyComponent<typeof import("../components/ui/breadcrumb/BreadcrumbItem.vue")['default']>
    'LazyUiBreadcrumbLink': LazyComponent<typeof import("../components/ui/breadcrumb/BreadcrumbLink.vue")['default']>
    'LazyUiBreadcrumbList': LazyComponent<typeof import("../components/ui/breadcrumb/BreadcrumbList.vue")['default']>
    'LazyUiBreadcrumbPage': LazyComponent<typeof import("../components/ui/breadcrumb/BreadcrumbPage.vue")['default']>
    'LazyUiBreadcrumbSeparator': LazyComponent<typeof import("../components/ui/breadcrumb/BreadcrumbSeparator.vue")['default']>
    'LazyUiButton': LazyComponent<typeof import("../components/ui/button/Button.vue")['default']>
    'LazyUiCheckbox': LazyComponent<typeof import("../components/ui/checkbox/Checkbox.vue")['default']>
    'LazyUiCollapsible': LazyComponent<typeof import("../components/ui/collapsible/Collapsible.vue")['default']>
    'LazyUiCollapsibleContent': LazyComponent<typeof import("../components/ui/collapsible/CollapsibleContent.vue")['default']>
    'LazyUiCollapsibleTrigger': LazyComponent<typeof import("../components/ui/collapsible/CollapsibleTrigger.vue")['default']>
    'LazyUiDropdownMenu': LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenu.vue")['default']>
    'LazyUiDropdownMenuCheckboxItem': LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenuCheckboxItem.vue")['default']>
    'LazyUiDropdownMenuContent': LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenuContent.vue")['default']>
    'LazyUiDropdownMenuGroup': LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenuGroup.vue")['default']>
    'LazyUiDropdownMenuItem': LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenuItem.vue")['default']>
    'LazyUiDropdownMenuLabel': LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenuLabel.vue")['default']>
    'LazyUiDropdownMenuRadioGroup': LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenuRadioGroup.vue")['default']>
    'LazyUiDropdownMenuRadioItem': LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenuRadioItem.vue")['default']>
    'LazyUiDropdownMenuSeparator': LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenuSeparator.vue")['default']>
    'LazyUiDropdownMenuShortcut': LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenuShortcut.vue")['default']>
    'LazyUiDropdownMenuSub': LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenuSub.vue")['default']>
    'LazyUiDropdownMenuSubContent': LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenuSubContent.vue")['default']>
    'LazyUiDropdownMenuSubTrigger': LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenuSubTrigger.vue")['default']>
    'LazyUiDropdownMenuTrigger': LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenuTrigger.vue")['default']>
    'LazyUiInput': LazyComponent<typeof import("../components/ui/input/Input.vue")['default']>
    'LazyUiNavigationMenu': LazyComponent<typeof import("../components/ui/navigation-menu/NavigationMenu.vue")['default']>
    'LazyUiNavigationMenuContent': LazyComponent<typeof import("../components/ui/navigation-menu/NavigationMenuContent.vue")['default']>
    'LazyUiNavigationMenuIndicator': LazyComponent<typeof import("../components/ui/navigation-menu/NavigationMenuIndicator.vue")['default']>
    'LazyUiNavigationMenuItem': LazyComponent<typeof import("../components/ui/navigation-menu/NavigationMenuItem.vue")['default']>
    'LazyUiNavigationMenuLink': LazyComponent<typeof import("../components/ui/navigation-menu/NavigationMenuLink.vue")['default']>
    'LazyUiNavigationMenuList': LazyComponent<typeof import("../components/ui/navigation-menu/NavigationMenuList.vue")['default']>
    'LazyUiNavigationMenuTrigger': LazyComponent<typeof import("../components/ui/navigation-menu/NavigationMenuTrigger.vue")['default']>
    'LazyUiNavigationMenuViewport': LazyComponent<typeof import("../components/ui/navigation-menu/NavigationMenuViewport.vue")['default']>
    'LazyUiSeparator': LazyComponent<typeof import("../components/ui/separator/Separator.vue")['default']>
    'LazyUiSheet': LazyComponent<typeof import("../components/ui/sheet/Sheet.vue")['default']>
    'LazyUiSheetClose': LazyComponent<typeof import("../components/ui/sheet/SheetClose.vue")['default']>
    'LazyUiSheetContent': LazyComponent<typeof import("../components/ui/sheet/SheetContent.vue")['default']>
    'LazyUiSheetDescription': LazyComponent<typeof import("../components/ui/sheet/SheetDescription.vue")['default']>
    'LazyUiSheetFooter': LazyComponent<typeof import("../components/ui/sheet/SheetFooter.vue")['default']>
    'LazyUiSheetHeader': LazyComponent<typeof import("../components/ui/sheet/SheetHeader.vue")['default']>
    'LazyUiSheetOverlay': LazyComponent<typeof import("../components/ui/sheet/SheetOverlay.vue")['default']>
    'LazyUiSheetTitle': LazyComponent<typeof import("../components/ui/sheet/SheetTitle.vue")['default']>
    'LazyUiSheetTrigger': LazyComponent<typeof import("../components/ui/sheet/SheetTrigger.vue")['default']>
    'LazyUiSidebar': LazyComponent<typeof import("../components/ui/sidebar/Sidebar.vue")['default']>
    'LazyUiSidebarContent': LazyComponent<typeof import("../components/ui/sidebar/SidebarContent.vue")['default']>
    'LazyUiSidebarFooter': LazyComponent<typeof import("../components/ui/sidebar/SidebarFooter.vue")['default']>
    'LazyUiSidebarGroup': LazyComponent<typeof import("../components/ui/sidebar/SidebarGroup.vue")['default']>
    'LazyUiSidebarGroupAction': LazyComponent<typeof import("../components/ui/sidebar/SidebarGroupAction.vue")['default']>
    'LazyUiSidebarGroupContent': LazyComponent<typeof import("../components/ui/sidebar/SidebarGroupContent.vue")['default']>
    'LazyUiSidebarGroupLabel': LazyComponent<typeof import("../components/ui/sidebar/SidebarGroupLabel.vue")['default']>
    'LazyUiSidebarHeader': LazyComponent<typeof import("../components/ui/sidebar/SidebarHeader.vue")['default']>
    'LazyUiSidebarInput': LazyComponent<typeof import("../components/ui/sidebar/SidebarInput.vue")['default']>
    'LazyUiSidebarInset': LazyComponent<typeof import("../components/ui/sidebar/SidebarInset.vue")['default']>
    'LazyUiSidebarMenu': LazyComponent<typeof import("../components/ui/sidebar/SidebarMenu.vue")['default']>
    'LazyUiSidebarMenuAction': LazyComponent<typeof import("../components/ui/sidebar/SidebarMenuAction.vue")['default']>
    'LazyUiSidebarMenuBadge': LazyComponent<typeof import("../components/ui/sidebar/SidebarMenuBadge.vue")['default']>
    'LazyUiSidebarMenuButton': LazyComponent<typeof import("../components/ui/sidebar/SidebarMenuButton.vue")['default']>
    'LazyUiSidebarMenuButtonChild': LazyComponent<typeof import("../components/ui/sidebar/SidebarMenuButtonChild.vue")['default']>
    'LazyUiSidebarMenuItem': LazyComponent<typeof import("../components/ui/sidebar/SidebarMenuItem.vue")['default']>
    'LazyUiSidebarMenuSkeleton': LazyComponent<typeof import("../components/ui/sidebar/SidebarMenuSkeleton.vue")['default']>
    'LazyUiSidebarMenuSub': LazyComponent<typeof import("../components/ui/sidebar/SidebarMenuSub.vue")['default']>
    'LazyUiSidebarMenuSubButton': LazyComponent<typeof import("../components/ui/sidebar/SidebarMenuSubButton.vue")['default']>
    'LazyUiSidebarMenuSubItem': LazyComponent<typeof import("../components/ui/sidebar/SidebarMenuSubItem.vue")['default']>
    'LazyUiSidebarProvider': LazyComponent<typeof import("../components/ui/sidebar/SidebarProvider.vue")['default']>
    'LazyUiSidebarRail': LazyComponent<typeof import("../components/ui/sidebar/SidebarRail.vue")['default']>
    'LazyUiSidebarSeparator': LazyComponent<typeof import("../components/ui/sidebar/SidebarSeparator.vue")['default']>
    'LazyUiSidebarTrigger': LazyComponent<typeof import("../components/ui/sidebar/SidebarTrigger.vue")['default']>
    'LazyUiSidebarUtils': LazyComponent<typeof import("../components/ui/sidebar/utils")['default']>
    'LazyUiSkeleton': LazyComponent<typeof import("../components/ui/skeleton/Skeleton.vue")['default']>
    'LazyUiTable': LazyComponent<typeof import("../components/ui/table/Table.vue")['default']>
    'LazyUiTableBody': LazyComponent<typeof import("../components/ui/table/TableBody.vue")['default']>
    'LazyUiTableCaption': LazyComponent<typeof import("../components/ui/table/TableCaption.vue")['default']>
    'LazyUiTableCell': LazyComponent<typeof import("../components/ui/table/TableCell.vue")['default']>
    'LazyUiTableEmpty': LazyComponent<typeof import("../components/ui/table/TableEmpty.vue")['default']>
    'LazyUiTableFooter': LazyComponent<typeof import("../components/ui/table/TableFooter.vue")['default']>
    'LazyUiTableHead': LazyComponent<typeof import("../components/ui/table/TableHead.vue")['default']>
    'LazyUiTableHeader': LazyComponent<typeof import("../components/ui/table/TableHeader.vue")['default']>
    'LazyUiTableRow': LazyComponent<typeof import("../components/ui/table/TableRow.vue")['default']>
    'LazyUiTableUtils': LazyComponent<typeof import("../components/ui/table/utils")['default']>
    'LazyUiTooltip': LazyComponent<typeof import("../components/ui/tooltip/Tooltip.vue")['default']>
    'LazyUiTooltipContent': LazyComponent<typeof import("../components/ui/tooltip/TooltipContent.vue")['default']>
    'LazyUiTooltipProvider': LazyComponent<typeof import("../components/ui/tooltip/TooltipProvider.vue")['default']>
    'LazyUiTooltipTrigger': LazyComponent<typeof import("../components/ui/tooltip/TooltipTrigger.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyColorScheme': LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AppSidebar: typeof import("../components/AppSidebar.vue")['default']
export const CodeMirrorEditor: typeof import("../components/CodeMirrorEditor.vue")['default']
export const IconsAccount: typeof import("../components/Icons/Account.vue")['default']
export const IconsBell: typeof import("../components/Icons/Bell.vue")['default']
export const IconsCalendar: typeof import("../components/Icons/Calendar.vue")['default']
export const IconsCancel: typeof import("../components/Icons/Cancel.vue")['default']
export const IconsDollar: typeof import("../components/Icons/Dollar.vue")['default']
export const IconsHammer: typeof import("../components/Icons/Hammer.vue")['default']
export const IconsInfo: typeof import("../components/Icons/Info.vue")['default']
export const IconsLogout: typeof import("../components/Icons/Logout.vue")['default']
export const IconsPen: typeof import("../components/Icons/Pen.vue")['default']
export const IconsPointing: typeof import("../components/Icons/Pointing.vue")['default']
export const IconsProgress: typeof import("../components/Icons/Progress.vue")['default']
export const IconsSettings: typeof import("../components/Icons/Settings.vue")['default']
export const IconsTag: typeof import("../components/Icons/Tag.vue")['default']
export const IconsTool: typeof import("../components/Icons/Tool.vue")['default']
export const LandingPage: typeof import("../components/LandingPage.vue")['default']
export const LoginPage: typeof import("../components/LoginPage.vue")['default']
export const NavMain: typeof import("../components/NavMain.vue")['default']
export const NavProjects: typeof import("../components/NavProjects.vue")['default']
export const NavUser: typeof import("../components/NavUser.vue")['default']
export const SideBar: typeof import("../components/SideBar.vue")['default']
export const SignupPage: typeof import("../components/SignupPage.vue")['default']
export const TeamSwitcher: typeof import("../components/TeamSwitcher.vue")['default']
export const SkeletonFooter: typeof import("../components/skeleton/Footer.vue")['default']
export const SkeletonHeader: typeof import("../components/skeleton/Header.vue")['default']
export const SkeletonModal: typeof import("../components/skeleton/Modal.vue")['default']
export const SkeletonNavBar: typeof import("../components/skeleton/NavBar.vue")['default']
export const UiAvatar: typeof import("../components/ui/avatar/Avatar.vue")['default']
export const UiAvatarFallback: typeof import("../components/ui/avatar/AvatarFallback.vue")['default']
export const UiAvatarImage: typeof import("../components/ui/avatar/AvatarImage.vue")['default']
export const UiBreadcrumb: typeof import("../components/ui/breadcrumb/Breadcrumb.vue")['default']
export const UiBreadcrumbEllipsis: typeof import("../components/ui/breadcrumb/BreadcrumbEllipsis.vue")['default']
export const UiBreadcrumbItem: typeof import("../components/ui/breadcrumb/BreadcrumbItem.vue")['default']
export const UiBreadcrumbLink: typeof import("../components/ui/breadcrumb/BreadcrumbLink.vue")['default']
export const UiBreadcrumbList: typeof import("../components/ui/breadcrumb/BreadcrumbList.vue")['default']
export const UiBreadcrumbPage: typeof import("../components/ui/breadcrumb/BreadcrumbPage.vue")['default']
export const UiBreadcrumbSeparator: typeof import("../components/ui/breadcrumb/BreadcrumbSeparator.vue")['default']
export const UiButton: typeof import("../components/ui/button/Button.vue")['default']
export const UiCheckbox: typeof import("../components/ui/checkbox/Checkbox.vue")['default']
export const UiCollapsible: typeof import("../components/ui/collapsible/Collapsible.vue")['default']
export const UiCollapsibleContent: typeof import("../components/ui/collapsible/CollapsibleContent.vue")['default']
export const UiCollapsibleTrigger: typeof import("../components/ui/collapsible/CollapsibleTrigger.vue")['default']
export const UiDropdownMenu: typeof import("../components/ui/dropdown-menu/DropdownMenu.vue")['default']
export const UiDropdownMenuCheckboxItem: typeof import("../components/ui/dropdown-menu/DropdownMenuCheckboxItem.vue")['default']
export const UiDropdownMenuContent: typeof import("../components/ui/dropdown-menu/DropdownMenuContent.vue")['default']
export const UiDropdownMenuGroup: typeof import("../components/ui/dropdown-menu/DropdownMenuGroup.vue")['default']
export const UiDropdownMenuItem: typeof import("../components/ui/dropdown-menu/DropdownMenuItem.vue")['default']
export const UiDropdownMenuLabel: typeof import("../components/ui/dropdown-menu/DropdownMenuLabel.vue")['default']
export const UiDropdownMenuRadioGroup: typeof import("../components/ui/dropdown-menu/DropdownMenuRadioGroup.vue")['default']
export const UiDropdownMenuRadioItem: typeof import("../components/ui/dropdown-menu/DropdownMenuRadioItem.vue")['default']
export const UiDropdownMenuSeparator: typeof import("../components/ui/dropdown-menu/DropdownMenuSeparator.vue")['default']
export const UiDropdownMenuShortcut: typeof import("../components/ui/dropdown-menu/DropdownMenuShortcut.vue")['default']
export const UiDropdownMenuSub: typeof import("../components/ui/dropdown-menu/DropdownMenuSub.vue")['default']
export const UiDropdownMenuSubContent: typeof import("../components/ui/dropdown-menu/DropdownMenuSubContent.vue")['default']
export const UiDropdownMenuSubTrigger: typeof import("../components/ui/dropdown-menu/DropdownMenuSubTrigger.vue")['default']
export const UiDropdownMenuTrigger: typeof import("../components/ui/dropdown-menu/DropdownMenuTrigger.vue")['default']
export const UiInput: typeof import("../components/ui/input/Input.vue")['default']
export const UiNavigationMenu: typeof import("../components/ui/navigation-menu/NavigationMenu.vue")['default']
export const UiNavigationMenuContent: typeof import("../components/ui/navigation-menu/NavigationMenuContent.vue")['default']
export const UiNavigationMenuIndicator: typeof import("../components/ui/navigation-menu/NavigationMenuIndicator.vue")['default']
export const UiNavigationMenuItem: typeof import("../components/ui/navigation-menu/NavigationMenuItem.vue")['default']
export const UiNavigationMenuLink: typeof import("../components/ui/navigation-menu/NavigationMenuLink.vue")['default']
export const UiNavigationMenuList: typeof import("../components/ui/navigation-menu/NavigationMenuList.vue")['default']
export const UiNavigationMenuTrigger: typeof import("../components/ui/navigation-menu/NavigationMenuTrigger.vue")['default']
export const UiNavigationMenuViewport: typeof import("../components/ui/navigation-menu/NavigationMenuViewport.vue")['default']
export const UiSeparator: typeof import("../components/ui/separator/Separator.vue")['default']
export const UiSheet: typeof import("../components/ui/sheet/Sheet.vue")['default']
export const UiSheetClose: typeof import("../components/ui/sheet/SheetClose.vue")['default']
export const UiSheetContent: typeof import("../components/ui/sheet/SheetContent.vue")['default']
export const UiSheetDescription: typeof import("../components/ui/sheet/SheetDescription.vue")['default']
export const UiSheetFooter: typeof import("../components/ui/sheet/SheetFooter.vue")['default']
export const UiSheetHeader: typeof import("../components/ui/sheet/SheetHeader.vue")['default']
export const UiSheetOverlay: typeof import("../components/ui/sheet/SheetOverlay.vue")['default']
export const UiSheetTitle: typeof import("../components/ui/sheet/SheetTitle.vue")['default']
export const UiSheetTrigger: typeof import("../components/ui/sheet/SheetTrigger.vue")['default']
export const UiSidebar: typeof import("../components/ui/sidebar/Sidebar.vue")['default']
export const UiSidebarContent: typeof import("../components/ui/sidebar/SidebarContent.vue")['default']
export const UiSidebarFooter: typeof import("../components/ui/sidebar/SidebarFooter.vue")['default']
export const UiSidebarGroup: typeof import("../components/ui/sidebar/SidebarGroup.vue")['default']
export const UiSidebarGroupAction: typeof import("../components/ui/sidebar/SidebarGroupAction.vue")['default']
export const UiSidebarGroupContent: typeof import("../components/ui/sidebar/SidebarGroupContent.vue")['default']
export const UiSidebarGroupLabel: typeof import("../components/ui/sidebar/SidebarGroupLabel.vue")['default']
export const UiSidebarHeader: typeof import("../components/ui/sidebar/SidebarHeader.vue")['default']
export const UiSidebarInput: typeof import("../components/ui/sidebar/SidebarInput.vue")['default']
export const UiSidebarInset: typeof import("../components/ui/sidebar/SidebarInset.vue")['default']
export const UiSidebarMenu: typeof import("../components/ui/sidebar/SidebarMenu.vue")['default']
export const UiSidebarMenuAction: typeof import("../components/ui/sidebar/SidebarMenuAction.vue")['default']
export const UiSidebarMenuBadge: typeof import("../components/ui/sidebar/SidebarMenuBadge.vue")['default']
export const UiSidebarMenuButton: typeof import("../components/ui/sidebar/SidebarMenuButton.vue")['default']
export const UiSidebarMenuButtonChild: typeof import("../components/ui/sidebar/SidebarMenuButtonChild.vue")['default']
export const UiSidebarMenuItem: typeof import("../components/ui/sidebar/SidebarMenuItem.vue")['default']
export const UiSidebarMenuSkeleton: typeof import("../components/ui/sidebar/SidebarMenuSkeleton.vue")['default']
export const UiSidebarMenuSub: typeof import("../components/ui/sidebar/SidebarMenuSub.vue")['default']
export const UiSidebarMenuSubButton: typeof import("../components/ui/sidebar/SidebarMenuSubButton.vue")['default']
export const UiSidebarMenuSubItem: typeof import("../components/ui/sidebar/SidebarMenuSubItem.vue")['default']
export const UiSidebarProvider: typeof import("../components/ui/sidebar/SidebarProvider.vue")['default']
export const UiSidebarRail: typeof import("../components/ui/sidebar/SidebarRail.vue")['default']
export const UiSidebarSeparator: typeof import("../components/ui/sidebar/SidebarSeparator.vue")['default']
export const UiSidebarTrigger: typeof import("../components/ui/sidebar/SidebarTrigger.vue")['default']
export const UiSidebarUtils: typeof import("../components/ui/sidebar/utils")['default']
export const UiSkeleton: typeof import("../components/ui/skeleton/Skeleton.vue")['default']
export const UiTable: typeof import("../components/ui/table/Table.vue")['default']
export const UiTableBody: typeof import("../components/ui/table/TableBody.vue")['default']
export const UiTableCaption: typeof import("../components/ui/table/TableCaption.vue")['default']
export const UiTableCell: typeof import("../components/ui/table/TableCell.vue")['default']
export const UiTableEmpty: typeof import("../components/ui/table/TableEmpty.vue")['default']
export const UiTableFooter: typeof import("../components/ui/table/TableFooter.vue")['default']
export const UiTableHead: typeof import("../components/ui/table/TableHead.vue")['default']
export const UiTableHeader: typeof import("../components/ui/table/TableHeader.vue")['default']
export const UiTableRow: typeof import("../components/ui/table/TableRow.vue")['default']
export const UiTableUtils: typeof import("../components/ui/table/utils")['default']
export const UiTooltip: typeof import("../components/ui/tooltip/Tooltip.vue")['default']
export const UiTooltipContent: typeof import("../components/ui/tooltip/TooltipContent.vue")['default']
export const UiTooltipProvider: typeof import("../components/ui/tooltip/TooltipProvider.vue")['default']
export const UiTooltipTrigger: typeof import("../components/ui/tooltip/TooltipTrigger.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const ColorScheme: typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAppSidebar: LazyComponent<typeof import("../components/AppSidebar.vue")['default']>
export const LazyCodeMirrorEditor: LazyComponent<typeof import("../components/CodeMirrorEditor.vue")['default']>
export const LazyIconsAccount: LazyComponent<typeof import("../components/Icons/Account.vue")['default']>
export const LazyIconsBell: LazyComponent<typeof import("../components/Icons/Bell.vue")['default']>
export const LazyIconsCalendar: LazyComponent<typeof import("../components/Icons/Calendar.vue")['default']>
export const LazyIconsCancel: LazyComponent<typeof import("../components/Icons/Cancel.vue")['default']>
export const LazyIconsDollar: LazyComponent<typeof import("../components/Icons/Dollar.vue")['default']>
export const LazyIconsHammer: LazyComponent<typeof import("../components/Icons/Hammer.vue")['default']>
export const LazyIconsInfo: LazyComponent<typeof import("../components/Icons/Info.vue")['default']>
export const LazyIconsLogout: LazyComponent<typeof import("../components/Icons/Logout.vue")['default']>
export const LazyIconsPen: LazyComponent<typeof import("../components/Icons/Pen.vue")['default']>
export const LazyIconsPointing: LazyComponent<typeof import("../components/Icons/Pointing.vue")['default']>
export const LazyIconsProgress: LazyComponent<typeof import("../components/Icons/Progress.vue")['default']>
export const LazyIconsSettings: LazyComponent<typeof import("../components/Icons/Settings.vue")['default']>
export const LazyIconsTag: LazyComponent<typeof import("../components/Icons/Tag.vue")['default']>
export const LazyIconsTool: LazyComponent<typeof import("../components/Icons/Tool.vue")['default']>
export const LazyLandingPage: LazyComponent<typeof import("../components/LandingPage.vue")['default']>
export const LazyLoginPage: LazyComponent<typeof import("../components/LoginPage.vue")['default']>
export const LazyNavMain: LazyComponent<typeof import("../components/NavMain.vue")['default']>
export const LazyNavProjects: LazyComponent<typeof import("../components/NavProjects.vue")['default']>
export const LazyNavUser: LazyComponent<typeof import("../components/NavUser.vue")['default']>
export const LazySideBar: LazyComponent<typeof import("../components/SideBar.vue")['default']>
export const LazySignupPage: LazyComponent<typeof import("../components/SignupPage.vue")['default']>
export const LazyTeamSwitcher: LazyComponent<typeof import("../components/TeamSwitcher.vue")['default']>
export const LazySkeletonFooter: LazyComponent<typeof import("../components/skeleton/Footer.vue")['default']>
export const LazySkeletonHeader: LazyComponent<typeof import("../components/skeleton/Header.vue")['default']>
export const LazySkeletonModal: LazyComponent<typeof import("../components/skeleton/Modal.vue")['default']>
export const LazySkeletonNavBar: LazyComponent<typeof import("../components/skeleton/NavBar.vue")['default']>
export const LazyUiAvatar: LazyComponent<typeof import("../components/ui/avatar/Avatar.vue")['default']>
export const LazyUiAvatarFallback: LazyComponent<typeof import("../components/ui/avatar/AvatarFallback.vue")['default']>
export const LazyUiAvatarImage: LazyComponent<typeof import("../components/ui/avatar/AvatarImage.vue")['default']>
export const LazyUiBreadcrumb: LazyComponent<typeof import("../components/ui/breadcrumb/Breadcrumb.vue")['default']>
export const LazyUiBreadcrumbEllipsis: LazyComponent<typeof import("../components/ui/breadcrumb/BreadcrumbEllipsis.vue")['default']>
export const LazyUiBreadcrumbItem: LazyComponent<typeof import("../components/ui/breadcrumb/BreadcrumbItem.vue")['default']>
export const LazyUiBreadcrumbLink: LazyComponent<typeof import("../components/ui/breadcrumb/BreadcrumbLink.vue")['default']>
export const LazyUiBreadcrumbList: LazyComponent<typeof import("../components/ui/breadcrumb/BreadcrumbList.vue")['default']>
export const LazyUiBreadcrumbPage: LazyComponent<typeof import("../components/ui/breadcrumb/BreadcrumbPage.vue")['default']>
export const LazyUiBreadcrumbSeparator: LazyComponent<typeof import("../components/ui/breadcrumb/BreadcrumbSeparator.vue")['default']>
export const LazyUiButton: LazyComponent<typeof import("../components/ui/button/Button.vue")['default']>
export const LazyUiCheckbox: LazyComponent<typeof import("../components/ui/checkbox/Checkbox.vue")['default']>
export const LazyUiCollapsible: LazyComponent<typeof import("../components/ui/collapsible/Collapsible.vue")['default']>
export const LazyUiCollapsibleContent: LazyComponent<typeof import("../components/ui/collapsible/CollapsibleContent.vue")['default']>
export const LazyUiCollapsibleTrigger: LazyComponent<typeof import("../components/ui/collapsible/CollapsibleTrigger.vue")['default']>
export const LazyUiDropdownMenu: LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenu.vue")['default']>
export const LazyUiDropdownMenuCheckboxItem: LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenuCheckboxItem.vue")['default']>
export const LazyUiDropdownMenuContent: LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenuContent.vue")['default']>
export const LazyUiDropdownMenuGroup: LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenuGroup.vue")['default']>
export const LazyUiDropdownMenuItem: LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenuItem.vue")['default']>
export const LazyUiDropdownMenuLabel: LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenuLabel.vue")['default']>
export const LazyUiDropdownMenuRadioGroup: LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenuRadioGroup.vue")['default']>
export const LazyUiDropdownMenuRadioItem: LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenuRadioItem.vue")['default']>
export const LazyUiDropdownMenuSeparator: LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenuSeparator.vue")['default']>
export const LazyUiDropdownMenuShortcut: LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenuShortcut.vue")['default']>
export const LazyUiDropdownMenuSub: LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenuSub.vue")['default']>
export const LazyUiDropdownMenuSubContent: LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenuSubContent.vue")['default']>
export const LazyUiDropdownMenuSubTrigger: LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenuSubTrigger.vue")['default']>
export const LazyUiDropdownMenuTrigger: LazyComponent<typeof import("../components/ui/dropdown-menu/DropdownMenuTrigger.vue")['default']>
export const LazyUiInput: LazyComponent<typeof import("../components/ui/input/Input.vue")['default']>
export const LazyUiNavigationMenu: LazyComponent<typeof import("../components/ui/navigation-menu/NavigationMenu.vue")['default']>
export const LazyUiNavigationMenuContent: LazyComponent<typeof import("../components/ui/navigation-menu/NavigationMenuContent.vue")['default']>
export const LazyUiNavigationMenuIndicator: LazyComponent<typeof import("../components/ui/navigation-menu/NavigationMenuIndicator.vue")['default']>
export const LazyUiNavigationMenuItem: LazyComponent<typeof import("../components/ui/navigation-menu/NavigationMenuItem.vue")['default']>
export const LazyUiNavigationMenuLink: LazyComponent<typeof import("../components/ui/navigation-menu/NavigationMenuLink.vue")['default']>
export const LazyUiNavigationMenuList: LazyComponent<typeof import("../components/ui/navigation-menu/NavigationMenuList.vue")['default']>
export const LazyUiNavigationMenuTrigger: LazyComponent<typeof import("../components/ui/navigation-menu/NavigationMenuTrigger.vue")['default']>
export const LazyUiNavigationMenuViewport: LazyComponent<typeof import("../components/ui/navigation-menu/NavigationMenuViewport.vue")['default']>
export const LazyUiSeparator: LazyComponent<typeof import("../components/ui/separator/Separator.vue")['default']>
export const LazyUiSheet: LazyComponent<typeof import("../components/ui/sheet/Sheet.vue")['default']>
export const LazyUiSheetClose: LazyComponent<typeof import("../components/ui/sheet/SheetClose.vue")['default']>
export const LazyUiSheetContent: LazyComponent<typeof import("../components/ui/sheet/SheetContent.vue")['default']>
export const LazyUiSheetDescription: LazyComponent<typeof import("../components/ui/sheet/SheetDescription.vue")['default']>
export const LazyUiSheetFooter: LazyComponent<typeof import("../components/ui/sheet/SheetFooter.vue")['default']>
export const LazyUiSheetHeader: LazyComponent<typeof import("../components/ui/sheet/SheetHeader.vue")['default']>
export const LazyUiSheetOverlay: LazyComponent<typeof import("../components/ui/sheet/SheetOverlay.vue")['default']>
export const LazyUiSheetTitle: LazyComponent<typeof import("../components/ui/sheet/SheetTitle.vue")['default']>
export const LazyUiSheetTrigger: LazyComponent<typeof import("../components/ui/sheet/SheetTrigger.vue")['default']>
export const LazyUiSidebar: LazyComponent<typeof import("../components/ui/sidebar/Sidebar.vue")['default']>
export const LazyUiSidebarContent: LazyComponent<typeof import("../components/ui/sidebar/SidebarContent.vue")['default']>
export const LazyUiSidebarFooter: LazyComponent<typeof import("../components/ui/sidebar/SidebarFooter.vue")['default']>
export const LazyUiSidebarGroup: LazyComponent<typeof import("../components/ui/sidebar/SidebarGroup.vue")['default']>
export const LazyUiSidebarGroupAction: LazyComponent<typeof import("../components/ui/sidebar/SidebarGroupAction.vue")['default']>
export const LazyUiSidebarGroupContent: LazyComponent<typeof import("../components/ui/sidebar/SidebarGroupContent.vue")['default']>
export const LazyUiSidebarGroupLabel: LazyComponent<typeof import("../components/ui/sidebar/SidebarGroupLabel.vue")['default']>
export const LazyUiSidebarHeader: LazyComponent<typeof import("../components/ui/sidebar/SidebarHeader.vue")['default']>
export const LazyUiSidebarInput: LazyComponent<typeof import("../components/ui/sidebar/SidebarInput.vue")['default']>
export const LazyUiSidebarInset: LazyComponent<typeof import("../components/ui/sidebar/SidebarInset.vue")['default']>
export const LazyUiSidebarMenu: LazyComponent<typeof import("../components/ui/sidebar/SidebarMenu.vue")['default']>
export const LazyUiSidebarMenuAction: LazyComponent<typeof import("../components/ui/sidebar/SidebarMenuAction.vue")['default']>
export const LazyUiSidebarMenuBadge: LazyComponent<typeof import("../components/ui/sidebar/SidebarMenuBadge.vue")['default']>
export const LazyUiSidebarMenuButton: LazyComponent<typeof import("../components/ui/sidebar/SidebarMenuButton.vue")['default']>
export const LazyUiSidebarMenuButtonChild: LazyComponent<typeof import("../components/ui/sidebar/SidebarMenuButtonChild.vue")['default']>
export const LazyUiSidebarMenuItem: LazyComponent<typeof import("../components/ui/sidebar/SidebarMenuItem.vue")['default']>
export const LazyUiSidebarMenuSkeleton: LazyComponent<typeof import("../components/ui/sidebar/SidebarMenuSkeleton.vue")['default']>
export const LazyUiSidebarMenuSub: LazyComponent<typeof import("../components/ui/sidebar/SidebarMenuSub.vue")['default']>
export const LazyUiSidebarMenuSubButton: LazyComponent<typeof import("../components/ui/sidebar/SidebarMenuSubButton.vue")['default']>
export const LazyUiSidebarMenuSubItem: LazyComponent<typeof import("../components/ui/sidebar/SidebarMenuSubItem.vue")['default']>
export const LazyUiSidebarProvider: LazyComponent<typeof import("../components/ui/sidebar/SidebarProvider.vue")['default']>
export const LazyUiSidebarRail: LazyComponent<typeof import("../components/ui/sidebar/SidebarRail.vue")['default']>
export const LazyUiSidebarSeparator: LazyComponent<typeof import("../components/ui/sidebar/SidebarSeparator.vue")['default']>
export const LazyUiSidebarTrigger: LazyComponent<typeof import("../components/ui/sidebar/SidebarTrigger.vue")['default']>
export const LazyUiSidebarUtils: LazyComponent<typeof import("../components/ui/sidebar/utils")['default']>
export const LazyUiSkeleton: LazyComponent<typeof import("../components/ui/skeleton/Skeleton.vue")['default']>
export const LazyUiTable: LazyComponent<typeof import("../components/ui/table/Table.vue")['default']>
export const LazyUiTableBody: LazyComponent<typeof import("../components/ui/table/TableBody.vue")['default']>
export const LazyUiTableCaption: LazyComponent<typeof import("../components/ui/table/TableCaption.vue")['default']>
export const LazyUiTableCell: LazyComponent<typeof import("../components/ui/table/TableCell.vue")['default']>
export const LazyUiTableEmpty: LazyComponent<typeof import("../components/ui/table/TableEmpty.vue")['default']>
export const LazyUiTableFooter: LazyComponent<typeof import("../components/ui/table/TableFooter.vue")['default']>
export const LazyUiTableHead: LazyComponent<typeof import("../components/ui/table/TableHead.vue")['default']>
export const LazyUiTableHeader: LazyComponent<typeof import("../components/ui/table/TableHeader.vue")['default']>
export const LazyUiTableRow: LazyComponent<typeof import("../components/ui/table/TableRow.vue")['default']>
export const LazyUiTableUtils: LazyComponent<typeof import("../components/ui/table/utils")['default']>
export const LazyUiTooltip: LazyComponent<typeof import("../components/ui/tooltip/Tooltip.vue")['default']>
export const LazyUiTooltipContent: LazyComponent<typeof import("../components/ui/tooltip/TooltipContent.vue")['default']>
export const LazyUiTooltipProvider: LazyComponent<typeof import("../components/ui/tooltip/TooltipProvider.vue")['default']>
export const LazyUiTooltipTrigger: LazyComponent<typeof import("../components/ui/tooltip/TooltipTrigger.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyColorScheme: LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
