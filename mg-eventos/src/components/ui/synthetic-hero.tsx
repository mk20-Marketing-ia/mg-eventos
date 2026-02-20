"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText, useGSAP);

interface ShaderPlaneProps {
  vertexShader: string;
  fragmentShader: string;
  uniforms: { [key: string]: { value: unknown } };
}

const ShaderPlane = ({
  vertexShader,
  fragmentShader,
  uniforms,
}: ShaderPlaneProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.u_time.value = state.clock.elapsedTime * 0.5;
      material.uniforms.u_resolution.value.set(size.width, size.height, 1.0);
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={THREE.FrontSide}
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
};

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

// Shader adaptado al branding de MG Eventos — paleta violeta/púrpura/dorada
const fragmentShader = `
  precision highp float;

  varying vec2 vUv;
  uniform float u_time;
  uniform vec3 u_resolution;

  vec2 toPolar(vec2 p) {
      float r = length(p);
      float a = atan(p.y, p.x);
      return vec2(r, a);
  }

  vec2 fromPolar(vec2 polar) {
      return vec2(cos(polar.y), sin(polar.y)) * polar.x;
  }

  void mainImage(out vec4 fragColor, in vec2 fragCoord) {
      vec2 p = 6.0 * ((fragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y);

      vec2 polar = toPolar(p);
      float r = polar.x;
      float a = polar.y;

      vec2 i = p;
      float c = 0.0;
      float rot = r + u_time + p.x * 0.100;
      for (float n = 0.0; n < 4.0; n++) {
          float rr = r + 0.15 * sin(u_time*0.7 + float(n) + r*2.0);
          p *= mat2(
              cos(rot - sin(u_time / 10.0)), sin(rot),
              -sin(cos(rot) - u_time / 10.0), cos(rot)
          ) * -0.25;

          float t = r - u_time / (n + 30.0);
          i -= p + sin(t - i.y) + rr;

          c += 2.2 / length(vec2(
              (sin(i.x + t) / 0.15),
              (cos(i.y + t) / 0.15)
          ));
      }

      c /= 8.0;

      // Paleta MG Eventos: violeta profundo (#1E1B4B) → violeta vibrante (#7C3AED) → dorado (#F59E0B)
      vec3 deepViolet = vec3(0.118, 0.106, 0.294);  // #1E1B4B
      vec3 violet     = vec3(0.486, 0.227, 0.929);  // #7C3AED
      vec3 gold       = vec3(0.961, 0.620, 0.043);  // #F59E0B

      float t1 = smoothstep(0.0, 0.5, c * 0.6);
      float t2 = smoothstep(0.4, 1.0, c * 0.6);
      vec3 finalColor = mix(deepViolet, violet, t1);
      finalColor = mix(finalColor, gold, t2 * 0.35);

      fragColor = vec4(finalColor, 1.0);
  }

  void main() {
      vec4 fragColor;
      vec2 fragCoord = vUv * u_resolution.xy;
      mainImage(fragColor, fragCoord);
      gl_FragColor = fragColor;
  }
`;

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface HeroProps {
  title: string;
  description: string;
  badgeText?: string;
  badgeLabel?: string;
  ctaButtons?: Array<{ text: string; href?: string; primary?: boolean }>;
  microDetails?: Array<string>;
  /** Reduce la altura a ~72vh — para páginas de servicio */
  compact?: boolean;
  /** Migas de pan — se muestran en la esquina superior izquierda */
  breadcrumbs?: BreadcrumbItem[];
}

const SyntheticHero = ({
  title = "An experiment in light, motion, and the quiet chaos between.",
  description = "Experience a new dimension of interaction.",
  badgeText = "MG Eventos",
  badgeLabel = "Galicia",
  ctaButtons = [
    { text: "Contáctanos", href: "/contacto", primary: true },
    { text: "Ver servicios", href: "#servicios" },
  ],
  microDetails = [],
  compact = false,
  breadcrumbs,
}: HeroProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const badgeWrapperRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const microRef = useRef<HTMLUListElement | null>(null);

  const shaderUniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector3(1, 1, 1) },
    }),
    []
  );

  useGSAP(
    () => {
      if (!headingRef.current) return;

      document.fonts.ready.then(() => {
        const split = new SplitText(headingRef.current!, {
          type: "lines",
          wordsClass: "hero-lines",
        });

        gsap.set(split.lines, {
          filter: "blur(16px)",
          yPercent: 24,
          autoAlpha: 0,
          scale: 1.04,
          transformOrigin: "50% 100%",
        });

        if (badgeWrapperRef.current)
          gsap.set(badgeWrapperRef.current, { autoAlpha: 0, y: -8 });
        if (paragraphRef.current)
          gsap.set(paragraphRef.current, { autoAlpha: 0, y: 8 });
        if (ctaRef.current)
          gsap.set(ctaRef.current, { autoAlpha: 0, y: 8 });

        const microItems = microRef.current
          ? Array.from(microRef.current.querySelectorAll("li"))
          : [];
        if (microItems.length > 0)
          gsap.set(microItems, { autoAlpha: 0, y: 6 });

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        if (badgeWrapperRef.current)
          tl.to(badgeWrapperRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, 0);

        tl.to(
          split.lines,
          {
            filter: "blur(0px)",
            yPercent: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.12,
          },
          0.1
        );

        if (paragraphRef.current)
          tl.to(paragraphRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.55");
        if (ctaRef.current)
          tl.to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.35");
        if (microItems.length > 0)
          tl.to(microItems, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 }, "-=0.25");
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className={`relative flex items-center justify-center overflow-hidden ${compact ? "min-h-[72vh]" : "min-h-screen"}`}
    >
      {/* Shader 3D background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <ShaderPlane
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={shaderUniforms}
          />
        </Canvas>
      </div>

      {/* Overlay sutil para mejorar legibilidad del texto */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-primary/30 via-transparent to-primary/50" />

      {/* Breadcrumbs — esquina superior izquierda */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="absolute top-6 left-6 z-20 flex items-center gap-1.5 text-xs text-white/50">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.href} className="flex items-center gap-1.5">
              {i > 0 && <span>/</span>}
              {i < breadcrumbs.length - 1 ? (
                <a href={crumb.href} className="hover:text-white/90 transition-colors">
                  {crumb.name}
                </a>
              ) : (
                <span className="text-white/80">{crumb.name}</span>
              )}
            </span>
          ))}
        </nav>
      )}

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
        <div ref={badgeWrapperRef}>
          <div className="mb-6 inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 uppercase tracking-wider cursor-default transition-colors">
            <span className="text-[10px] font-light tracking-[0.18em] text-white/70">
              {badgeLabel}
            </span>
            <span className="h-1 w-1 rounded-full bg-violet-300/60" />
            <span className="text-xs font-light tracking-tight text-violet-200">
              {badgeText}
            </span>
          </div>
        </div>

        <h1
          ref={headingRef}
          className="text-5xl md:text-7xl max-w-4xl font-heading font-bold tracking-tight text-white mb-4"
        >
          {title}
        </h1>

        <p
          ref={paragraphRef}
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body font-light"
        >
          {description}
        </p>

        <div
          ref={ctaRef}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {ctaButtons.map((button, index) => {
            const isPrimary = button.primary ?? index === 0;
            const classes = isPrimary
              ? "px-8 py-3 rounded-xl text-base font-heading font-semibold backdrop-blur-lg bg-secondary/90 hover:bg-secondary shadow-lg shadow-secondary/25 transition-all cursor-pointer text-white inline-flex items-center justify-center"
              : "px-8 py-3 rounded-xl text-base font-heading font-medium border border-white/30 text-white hover:bg-white/10 backdrop-blur-lg transition-all cursor-pointer inline-flex items-center justify-center";

            if (button.href) {
              return (
                <a key={index} href={button.href} className={classes}>
                  {button.text}
                </a>
              );
            }

            return (
              <button key={index} type="button" className={classes}>
                {button.text}
              </button>
            );
          })}
        </div>

        {microDetails.length > 0 && (
          <ul
            ref={microRef}
            className="mt-8 flex flex-wrap justify-center gap-6 text-xs font-light tracking-tight text-white/60"
          >
            {microDetails.map((detail, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-accent/60" />
                {detail}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
};

export default SyntheticHero;
