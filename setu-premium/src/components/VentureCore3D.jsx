import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, Layers, Activity, TrendingUp, ShieldCheck } from 'lucide-react';

export default function VentureCore3D() {
  const mountRef = useRef(null);
  const [activeStage, setActiveStage] = useState(0); // 0: All, 1: Idea, 2: MVP, 3: Revenue, 4: Scale
  const [isHovered, setIsHovered] = useState(false);

  const stageDescriptions = [
    { title: "SETU 0-TO-1 VENTURE ENGINE", subtitle: "Full architectural bridge from hypothesis to institutional capital", metric: "100-Day Sprint", color: "text-brand-400" },
    { title: "STAGE 01 : PROBLEM SURGERY", subtitle: "50 customer interviews & lethal blindspot extraction", metric: "50+ Calls", color: "text-sky-400" },
    { title: "STAGE 02 : RAPID MVP BUILD", subtitle: "Production architecture paired with resident engineering titans", metric: "30-Day Build", color: "text-blue-400" },
    { title: "STAGE 03 : FIRST 10 PAID PILOTS", subtitle: "B2B commercial contracts & profitable unit economics", metric: "10 Paid LOIs", color: "text-emerald-400" },
    { title: "STAGE 04 : VC DEMO DAY", subtitle: "20+ Tier-1 Seed funds & clean 0% dilution cap table", metric: "$600K-$2M Raised", color: "text-teal-300" },
  ];

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // 1. SCENE SETUP
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07080B, 0.05);

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 2.2, 8.8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    currentMount.appendChild(renderer.domElement);

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // ==========================================
    // 2. ARCHITECTURAL SUSPENSION BRIDGE (SETU)
    // ==========================================
    const bridgeGroup = new THREE.Group();
    rootGroup.add(bridgeGroup);

    // Metallic Deck Foundation
    const deckWidth = 7.6;
    const deckGeom = new THREE.BoxGeometry(deckWidth, 0.06, 1.4, 24, 1, 4);
    const deckMat = new THREE.MeshStandardMaterial({
      color: 0x0C101A,
      metalness: 0.9,
      roughness: 0.2,
      wireframe: false,
    });
    const deck = new THREE.Mesh(deckGeom, deckMat);
    deck.position.y = -0.5;
    bridgeGroup.add(deck);

    // Deck Perimeter Wireframe Grid
    const wireGeom = new THREE.WireframeGeometry(deckGeom);
    const wireMat = new THREE.LineBasicMaterial({ color: 0x2563EB, transparent: true, opacity: 0.35 });
    const wireframe = new THREE.LineSegments(wireGeom, wireMat);
    deck.add(wireframe);

    // Glowing Center Laser Runway
    const laserGeom = new THREE.PlaneGeometry(deckWidth, 0.05);
    const laserMat = new THREE.MeshBasicMaterial({
      color: 0x38BDF8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95
    });
    const laserMesh = new THREE.Mesh(laserGeom, laserMat);
    laserMesh.rotation.x = Math.PI / 2;
    laserMesh.position.y = -0.46;
    bridgeGroup.add(laserMesh);

    // Golden Ratio Main Twin Arches
    const createArch = (zOffset, colorHex) => {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-3.6, -1.0, zOffset),
        new THREE.Vector3(-2.0, 1.2, zOffset),
        new THREE.Vector3(0, 1.9, zOffset),
        new THREE.Vector3(2.0, 1.2, zOffset),
        new THREE.Vector3(3.6, -1.0, zOffset),
      ]);
      const tubeGeom = new THREE.TubeGeometry(curve, 64, 0.045, 10, false);
      const tubeMat = new THREE.MeshStandardMaterial({
        color: colorHex,
        emissive: colorHex,
        emissiveIntensity: 0.7,
        metalness: 0.9,
        roughness: 0.15
      });
      return new THREE.Mesh(tubeGeom, tubeMat);
    };

    const archFront = createArch(0.45, 0x3B82F6);
    const archBack = createArch(-0.45, 0x60A5FA);
    bridgeGroup.add(archFront);
    bridgeGroup.add(archBack);

    // Suspension Vertical Light Cables
    const cableCount = 12;
    const cableMat = new THREE.LineBasicMaterial({ color: 0x60A5FA, transparent: true, opacity: 0.4 });
    const cablesGroup = new THREE.Group();

    for (let i = 0; i <= cableCount; i++) {
      const t = i / cableCount;
      const x = -3.0 + t * 6.0;
      const archY = 1.9 - Math.pow(x / 2.5, 2) * 1.45;

      const pFront = [new THREE.Vector3(x, archY, 0.45), new THREE.Vector3(x, -0.48, 0.45)];
      const geomF = new THREE.BufferGeometry().setFromPoints(pFront);
      cablesGroup.add(new THREE.Line(geomF, cableMat));

      const pBack = [new THREE.Vector3(x, archY, -0.45), new THREE.Vector3(x, -0.48, -0.45)];
      const geomB = new THREE.BufferGeometry().setFromPoints(pBack);
      cablesGroup.add(new THREE.Line(geomB, cableMat));
    }
    bridgeGroup.add(cablesGroup);

    // Twin Monolith Anchors (Stage 0 Left / Stage 1 Right)
    const towerGeom = new THREE.BoxGeometry(0.3, 2.8, 1.3);
    const towerMat = new THREE.MeshStandardMaterial({
      color: 0x070B14,
      emissive: 0x1E3A8A,
      emissiveIntensity: 0.3,
      metalness: 0.95,
      roughness: 0.1
    });

    const towerLeft = new THREE.Mesh(towerGeom, towerMat);
    towerLeft.position.set(-3.6, 0.3, 0);
    bridgeGroup.add(towerLeft);

    const towerRight = new THREE.Mesh(towerGeom, towerMat);
    towerRight.position.set(3.6, 0.3, 0);
    bridgeGroup.add(towerRight);

    // ==========================================
    // 3. INTERACTIVE 3D MILESTONE NODES
    // ==========================================
    const milestoneNodes = [];
    const milestoneConfigs = [
      { id: 1, x: -2.6, y: 0.3, z: 0.4, color: 0x38BDF8, name: "Validation" },
      { id: 2, x: -0.9, y: 0.7, z: -0.4, color: 0x60A5FA, name: "MVP Prototyping" },
      { id: 3, x: 0.9, y: 0.7, z: 0.4, color: 0x10B981, name: "Paid Traction" },
      { id: 4, x: 2.6, y: 0.3, z: -0.4, color: 0x34D399, name: "Demo Day Scale" },
    ];

    milestoneConfigs.forEach((m, idx) => {
      const nodeGroup = new THREE.Group();
      nodeGroup.position.set(m.x, m.y, m.z);

      // Core Polyhedron
      const geom = new THREE.OctahedronGeometry(0.2, 0);
      const mat = new THREE.MeshStandardMaterial({
        color: m.color,
        emissive: m.color,
        emissiveIntensity: 0.8,
        wireframe: true,
      });
      const mesh = new THREE.Mesh(geom, mat);
      nodeGroup.add(mesh);

      // Outer Orbital Ring
      const ringGeom = new THREE.TorusGeometry(0.32, 0.012, 12, 32);
      const ringMat = new THREE.MeshBasicMaterial({ color: m.color, transparent: true, opacity: 0.7 });
      const ring = new THREE.Mesh(ringGeom, ringMat);
      ring.rotation.x = Math.PI / 3;
      nodeGroup.add(ring);

      // Connecting Light Column to Runway
      const beamPts = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, -0.48 - m.y, -m.z * 0.5)];
      const beamGeom = new THREE.BufferGeometry().setFromPoints(beamPts);
      const beamMat = new THREE.LineBasicMaterial({ color: m.color, transparent: true, opacity: 0.4 });
      nodeGroup.add(new THREE.Line(beamGeom, beamMat));

      nodeGroup.userData = { id: m.id, initialY: m.y, speed: 1.2 + idx * 0.2, mesh, ring };
      milestoneNodes.push(nodeGroup);
      rootGroup.add(nodeGroup);
    });

    // Central Gyroscope Core (The Setu Engine)
    const centralCore = new THREE.Group();
    centralCore.position.set(0, 1.95, 0);

    const cRing1 = new THREE.Mesh(
      new THREE.TorusGeometry(0.48, 0.018, 16, 48),
      new THREE.MeshBasicMaterial({ color: 0x38BDF8 })
    );
    const cRing2 = new THREE.Mesh(
      new THREE.TorusGeometry(0.36, 0.018, 16, 48),
      new THREE.MeshBasicMaterial({ color: 0x34D399 })
    );
    cRing2.rotation.x = Math.PI / 3;
    const cInner = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.16, 1),
      new THREE.MeshBasicMaterial({ color: 0xFFFFFF, wireframe: true })
    );

    centralCore.add(cRing1);
    centralCore.add(cRing2);
    centralCore.add(cInner);
    rootGroup.add(centralCore);

    // ==========================================
    // 4. STREAMING VENTURE DATA PARTICLES
    // ==========================================
    const particleCount = 280;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 7.4; // X across bridge
      particlePositions[i * 3 + 1] = -0.46 + (Math.random() - 0.5) * 0.2;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 0.9;
      particleSpeeds[i] = 0.025 + Math.random() * 0.035;
    }

    const pGeom = new THREE.BufferGeometry();
    pGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.075,
      color: 0x60A5FA,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(pGeom, pMat);
    rootGroup.add(particleSystem);

    // ==========================================
    // 5. LIGHTING
    // ==========================================
    const ambient = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambient);

    const blueLight = new THREE.DirectionalLight(0x3B82F6, 5);
    blueLight.position.set(6, 6, 4);
    scene.add(blueLight);

    const emeraldLight = new THREE.DirectionalLight(0x10B981, 4);
    emeraldLight.position.set(-6, -3, 3);
    scene.add(emeraldLight);

    // ==========================================
    // 6. INTERACTION & ANIMATION
    // ==========================================
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let dragDeltaX = 0;
    let dragDeltaY = 0;

    const onMouseMove = (e) => {
      const rect = currentMount.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      targetY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      if (isDragging) {
        dragDeltaX += (e.clientX - previousMousePosition.x) * 0.008;
        dragDeltaY += (e.clientY - previousMousePosition.y) * 0.008;
        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    currentMount.addEventListener('mousemove', onMouseMove);
    currentMount.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    const handleResize = () => {
      if (!currentMount) return;
      const w = currentMount.clientWidth;
      const h = currentMount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Group rotation with drag offset + subtle idle sway
      rootGroup.rotation.y = -0.28 + mouseX * 0.4 + dragDeltaX;
      rootGroup.rotation.x = 0.16 + mouseY * 0.25 + dragDeltaY;
      rootGroup.position.y = Math.sin(elapsed * 0.9) * 0.06;

      // Spin central core
      cRing1.rotation.x = elapsed * 1.4;
      cRing1.rotation.y = elapsed * 0.9;
      cRing2.rotation.y = -elapsed * 1.1;
      cRing2.rotation.z = elapsed * 0.8;
      cInner.rotation.x = elapsed * 0.5;

      // Bob & rotate milestone nodes
      milestoneNodes.forEach((node) => {
        node.userData.mesh.rotation.x += 0.02;
        node.userData.mesh.rotation.y += 0.025;
        node.userData.ring.rotation.z -= 0.015;
        node.position.y = node.userData.initialY + Math.sin(elapsed * node.userData.speed) * 0.05;
      });

      // Stream data particles across the bridge
      const pArr = particleSystem.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        pArr[i * 3] += particleSpeeds[i];
        if (pArr[i * 3] > 3.8) {
          pArr[i * 3] = -3.8;
        }
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      currentMount.removeEventListener('mousemove', onMouseMove);
      currentMount.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const curr = stageDescriptions[activeStage];

  return (
    <div
      className="relative w-full rounded-3xl bg-obsidian-900/90 border border-white/15 p-5 sm:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_50px_-10px_rgba(59,130,246,0.25)] backdrop-blur-2xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Blueprint Grid Underlay */}
      <div className="absolute inset-0 bg-subtle-grid opacity-25 pointer-events-none rounded-3xl" />

      {/* Top Telemetry Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/[0.08] relative z-20">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="font-mono text-[11px] text-steel-400 font-bold tracking-wider uppercase ml-1">
            SETU BRIDGE ENGINE // 3D KINETIC CORE
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px] text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          DRAG TO ROTATE 3D
        </div>
      </div>

      {/* Stage Selector Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 my-3 relative z-20">
        {['All Core', '01. Surgery', '02. Build', '03. Pilots', '04. Scale'].map((label, idx) => (
          <button
            key={label}
            type="button"
            onClick={() => setActiveStage(idx)}
            className={`py-1.5 px-2 rounded-lg text-[11px] font-mono font-medium transition-all ${
              activeStage === idx
                ? 'bg-brand-500 text-white shadow-md font-bold'
                : 'bg-obsidian-950/80 text-steel-400 hover:text-white hover:bg-white/[0.05] border border-white/[0.04]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Interactive 3D WebGL Canvas Container */}
      <div className="relative w-full h-[320px] sm:h-[360px] cursor-grab active:cursor-grabbing rounded-2xl overflow-hidden bg-obsidian-950/60 border border-white/[0.05]">
        {/* Top Left Stage 0 Marker */}
        <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md bg-obsidian-950/80 backdrop-blur-md border border-brand-500/30 text-[10px] font-mono text-brand-300 pointer-events-none">
          STAGE 0 : RAW HYPOTHESIS
        </div>

        {/* Top Right Stage 1 Marker */}
        <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-md bg-obsidian-950/80 backdrop-blur-md border border-emerald-500/30 text-[10px] font-mono text-emerald-300 pointer-events-none flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          STAGE 1 : VENTURE SCALE
        </div>

        {/* The 3D Mount */}
        <div ref={mountRef} className="w-full h-full" />

        {/* Floating Active Stage HUD Overlay */}
        <div className="absolute bottom-3 left-3 right-3 z-10 p-3 rounded-xl bg-obsidian-900/90 backdrop-blur-md border border-white/10 flex items-center justify-between pointer-events-none shadow-xl">
          <div>
            <div className={`font-mono text-[10px] uppercase font-bold tracking-wider ${curr.color}`}>
              {curr.title}
            </div>
            <p className="text-xs font-sans text-steel-200 mt-0.5 line-clamp-1">
              {curr.subtitle}
            </p>
          </div>
          <div className="px-2.5 py-1 rounded bg-white/[0.06] border border-white/[0.08] font-mono text-[11px] font-bold text-white shrink-0">
            {curr.metric}
          </div>
        </div>
      </div>

      {/* Bottom Live Status Bar */}
      <div className="mt-3.5 pt-3 border-t border-white/[0.08] flex items-center justify-between font-mono text-[11px] text-steel-400 relative z-20">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-steel-300">0.00% Equity Dilution</span>
        </div>
        <div className="flex items-center gap-2 text-steel-400">
          <span>IIT-M & IIM-R ACCREDITED</span>
        </div>
      </div>
    </div>
  );
}
