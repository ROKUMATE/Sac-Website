import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";

export default function Home() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <AboutSection />
        </div>
    );
}
