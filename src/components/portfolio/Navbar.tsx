import { useEffect, useState } from "react";
import { Check, Menu, Moon, Palette, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { type ThemePalette, useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { navSections } from "./content";

const palettes: Array<{ id: ThemePalette; name: string; swatches: string }> = [
 { id: "ocean", name: "Ocean Blue", swatches: "theme-swatch-ocean" },
 { id: "emerald", name: "Emerald Mint", swatches: "theme-swatch-emerald" },
 { id: "crimson", name: "Crimson Rose", swatches: "theme-swatch-crimson" },
 { id: "amber", name: "Amber Graphite", swatches: "theme-swatch-amber" },
];

export function Navbar() {
 const { theme, palette, setPalette, setMode, mounted } = useTheme();
 const [open, setOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);

 useEffect(() => {
 const onScroll = () => setScrolled(window.scrollY > 8);
 onScroll();
 window.addEventListener("scroll", onScroll, { passive: true });
 return () => window.removeEventListener("scroll", onScroll);
 }, []);

 return (
 <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
 <nav
 aria-label="Main"
 className={cn(
 "mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-full border px-4 py-2.5 transition-all duration-300 sm:px-5",
 "border-white/10 bg-background/5 shadow-[var(--shadow-card)] backdrop-blur-2xl backdrop-saturate-150",
 scrolled && "border-white/15 bg-background/10",
 )}
 >
 <a href="#top" className="min-w-0 truncate font-display text-sm font-bold tracking-tight">
 <span className="text-primary">/</span>dev.portfolio
 </a>

 <div className="flex shrink-0 items-center gap-1">
 <ul className="hidden items-center gap-0.5 lg:flex">
 {navSections.map((item) => (
 <li key={item.id}>
 <a
 href={`#${item.id}`}
 className="rounded-full px-3.5 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-primary/15 hover:text-foreground"
 >
 {item.label}
 </a>
 </li>
 ))}
 </ul>

 <Popover>
 <PopoverTrigger asChild>
 <Button
 type="button"
 variant="ghost"
 size="icon"
 aria-label="Choose color theme"
 className="ml-1 rounded-full border border-white/15 bg-surface/40 text-foreground backdrop-blur-md "
 >
 <Palette className="h-4 w-4" aria-hidden />
 </Button>
 </PopoverTrigger>
 <PopoverContent
 align="end"
 sideOffset={10}
 className="w-[min(19rem,calc(100vw-2rem))] rounded-2xl border-white/15 bg-popover/95 p-3 shadow-[var(--shadow-lift)] backdrop-blur-2xl"
 >
 <div className="flex items-center justify-between gap-4 border-b border-border/70 px-1 pb-3">
 <div>
 <p className="font-display text-sm font-semibold">Appearance</p>
 <p className="text-xs text-muted-foreground">{theme === "dark" ? "Dark" : "Light"} mode</p>
 </div>
 <div className="flex items-center gap-2 text-muted-foreground">
 <Sun className="h-3.5 w-3.5" aria-hidden />
 <Switch
 checked={theme === "dark"}
 onCheckedChange={(checked) => setMode(checked ? "dark" : "light")}
 aria-label="Use dark mode"
 />
 <Moon className="h-3.5 w-3.5" aria-hidden />
 </div>
 </div>

 <div className="mt-2 grid gap-1" role="radiogroup" aria-label="Color palette">
 {palettes.map((item) => {
 const selected = mounted && palette === item.id;
 return (
 <Button
 key={item.id}
 type="button"
 variant="ghost"
 role="radio"
 aria-checked={selected}
 onClick={() => setPalette(item.id)}
 className={cn(
 "h-11 w-full justify-start rounded-xl px-2.5 text-sm",
 selected ? "bg-primary/12 text-foreground" : "text-muted-foreground",
 )}
 >
 <span className={cn("theme-swatch", item.swatches)} aria-hidden>
 <span />
 <span />
 </span>
 <span className="flex-1 text-left">{item.name}</span>
 {selected ? <Check className="h-4 w-4 text-primary" aria-hidden /> : null}
 </Button>
 );
 })}
 </div>
 </PopoverContent>
 </Popover>

 <Button
 type="button"
 variant="ghost"
 size="icon"
 onClick={() => setOpen((v) => !v)}
 aria-label={open ? "Close menu" : "Open menu"}
 aria-expanded={open}
 className="rounded-full border border-white/15 bg-surface/40 text-foreground backdrop-blur-md lg:hidden"
 >
 {open ? <X className="h-4 w-4" aria-hidden /> : <Menu className="h-4 w-4" aria-hidden />}
 </Button>
 </div>
 </nav>

 {open ? (
 <div className="mx-auto mt-2 w-full max-w-7xl rounded-3xl border border-border bg-background/95 p-2 shadow-[var(--shadow-card)] backdrop-blur-xl lg:hidden">
 <ul className="grid gap-0.5">
 {navSections.map((item) => (
 <li key={item.id}>
 <a
 href={`#${item.id}`}
 onClick={() => setOpen(false)}
 className="block rounded-2xl px-4 py-2.5 text-sm text-muted-foreground transition-colors "
 >
 {item.label}
 </a>
 </li>
 ))}
 </ul>
 </div>
 ) : null}
 </header>
 );
}
