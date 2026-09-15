import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // 1. SCENE SETUP
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x040507, 0.04);

    const camera = new THREE.PerspectiveCamera(
      45,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2.5, 9.5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // ==========================================
    // 2. "SETU" ARCHITECTURAL BRIDGE STRUCTURE
    // ==========================================
    const bridgeGroup = new THREE.Group();
    mainGroup.add(bridgeGroup);

    // A. Main Arch Curves (Twin Suspended Golden-Ratio Arches)
    const createArch = (zOffset, colorHex) => {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-3.8, -1.2, zOffset),
        new THREE.Vector3(-2.2, 0.9, zOffset),
        new THREE.Vector3(0, 1.8, zOffset),
        new THREE.Vector3(2.2, 0.9, zOffset),
        new THREE.Vector3(3.8, -1.2, zOffset),
      ]);
      const tubeGeom = new THREE.TubeGeometry(curve, 64, 0.06, 12, false);
      const tubeMat = new THREE.MeshStandardMaterial({
        color: colorHex,
        emissive: colorHex,
        emissiveIntensity: 0.8,
        roughness: 0.2,
        metalness: 0.8,
      });
      return new THREE.Mesh(tubeGeom, tubeMat);
    };

    const archFront = createArch(0.4, 0x3B82F6); // Electric Blue
    const archBack = createArch(-0.4, 0x60A5FA); // Bright Sky Blue
    bridgeGroup.add(archFront);
    bridgeGroup.add(archBack);

    // B. Bridge Roadway Deck (Lattice Grid Runway)
    const deckWidth = 8.2;
    const deckDepth = 1.2;
    const deckGeom = new THREE.BoxGeometry(deckWidth, 0.08, deckDepth, 32, 1, 6);
    const deckMat = new THREE.MeshStandardMaterial({
      color: 0x0E1424,
      emissive: 0x1E293B,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const deckMesh = new THREE.Mesh(deckGeom, deckMat);
    deckMesh.position.y = -0.6;
    bridgeGroup.add(deckMesh);

    // C. Glowing Center Runway Laser Line
    const centerLineGeom = new THREE.PlaneGeometry(deckWidth, 0.04);
    const centerLineMat = new THREE.MeshBasicMaterial({
      color: 0x38BDF8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
    });
    const centerLine = new THREE.Mesh(centerLineGeom, centerLineMat);
    centerLine.rotation.x = Math.PI / 2;
    centerLine.position.y = -0.55;
    bridgeGroup.add(centerLine);

    // D. Vertical Suspension Light Cables
    const cableCount = 14;
    const cablesGroup = new THREE.Group();
    const cableMat = new THREE.LineBasicMaterial({
      color: 0x60A5FA,
      transparent: true,
      opacity: 0.45,
    });

    for (let i = 0; i <= cableCount; i++) {
      const t = i / cableCount;
      const x = -3.2 + t * 6.4;
      // Parabolic height matching arch
      const archY = 1.8 - Math.pow(x / 2.7, 2) * 1.5;

      // Front and back cables
      const pointsFront = [
        new THREE.Vector3(x, archY, 0.4),
        new THREE.Vector3(x, -0.6, 0.4),
      ];
      const geomF = new THREE.BufferGeometry().setFromPoints(pointsFront);
      cablesGroup.add(new THREE.Line(geomF, cableMat));

      const pointsBack = [
        new THREE.Vector3(x, archY, -0.4),
        new THREE.Vector3(x, -0.6, -0.4),
      ];
      const geomB = new THREE.BufferGeometry().setFromPoints(pointsBack);
      cablesGroup.add(new THREE.Line(geomB, cableMat));
    }
    bridgeGroup.add(cablesGroup);

    // E. Left & Right Anchor Monolith Towers (0 and 1 Pillars)
    const towerGeom = new THREE.BoxGeometry(0.35, 3.2, 1.4);
    const towerMat = new THREE.MeshStandardMaterial({
      color: 0x080C16,
      emissive: 0x172554,
      roughness: 0.3,
      metalness: 0.9,
    });

    const towerLeft = new THREE.Mesh(towerGeom, towerMat);
    towerLeft.position.set(-3.8, 0.2, 0);
    bridgeGroup.add(towerLeft);

    const towerRight = new THREE.Mesh(towerGeom, towerMat);
    towerRight.position.set(3.8, 0.2, 0);
    bridgeGroup.add(towerRight);

    // ==========================================
    // 3. STAGE 0 (IDEA) & STAGE 1 (VENTURE) HUBS
    // ==========================================
    // Left Core Node: "Stage 0 (Ideation)"
    const node0Geom = new THREE.IcosahedronGeometry(0.45, 2);
    const node0Mat = new THREE.MeshStandardMaterial({
      color: 0x38BDF8,
      emissive: 0x0284C7,
      emissiveIntensity: 0.8,
      wireframe: true,
    });
    const node0 = new THREE.Mesh(node0Geom, node0Mat);
    node0.position.set(-3.8, 1.9, 0);
    mainGroup.add(node0);

    // Right Core Node: "Stage 1 (Venture Scale)"
    const node1Geom = new THREE.OctahedronGeometry(0.55, 1);
    const node1Mat = new THREE.MeshStandardMaterial({
      color: 0x34D399,
      emissive: 0x059669,
      emissiveIntensity: 0.8,
      wireframe: true,
    });
    const node1 = new THREE.Mesh(node1Geom, node1Mat);
    node1.position.set(3.8, 1.9, 0);
    mainGroup.add(node1);

    // Center Apex Gyroscope Rings (The Setu Engine Core)
    const coreGroup = new THREE.Group();
    coreGroup.position.set(0, 1.85, 0);

    const ring1Geom = new THREE.TorusGeometry(0.55, 0.02, 16, 64);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0x60A5FA });
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
    coreGroup.add(ring1);

    const ring2Geom = new THREE.TorusGeometry(0.42, 0.02, 16, 64);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x34D399 });
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.rotation.x = Math.PI / 3;
    coreGroup.add(ring2);

    const innerCoreGeom = new THREE.SphereGeometry(0.18, 16, 16);
    const innerCoreMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
    const innerCore = new THREE.Mesh(innerCoreGeom, innerCoreMat);
    coreGroup.add(innerCore);

    mainGroup.add(coreGroup);

    // ==========================================
    // 4. FLOATING MILESTONE NODES (ORBITAL MESH)
    // ==========================================
    const milestoneNodes = [];
    const milestonePositions = [
      { pos: new THREE.Vector3(-1.8, 0.4, 0.8), color: 0x38BDF8 }, // Problem Validation
      { pos: new THREE.Vector3(-0.6, 0.7, -0.7), color: 0x60A5FA }, // MVP Prototyping
      { pos: new THREE.Vector3(0.9, 0.6, 0.9), color: 0x10B981 }, // Traction & Users
      { pos: new THREE.Vector3(2.2, 0.3, -0.6), color: 0x34D399 }, // Seed Fundraising
    ];

    milestonePositions.forEach((m, idx) => {
      const mGeom = new THREE.DodecahedronGeometry(0.15, 0);
      const mMat = new THREE.MeshStandardMaterial({
        color: m.color,
        emissive: m.color,
        emissiveIntensity: 0.6,
        wireframe: true,
      });
      const mMesh = new THREE.Mesh(mGeom, mMat);
      mMesh.position.copy(m.pos);
      mMesh.userData = { initialY: m.pos.y, speed: 0.8 + idx * 0.3 };
      milestoneNodes.push(mMesh);
      mainGroup.add(mMesh);

      // Light beam connecting milestone node to bridge runway
      const beamPoints = [
        m.pos,
        new THREE.Vector3(m.pos.x, -0.58, m.pos.z * 0.4),
      ];
      const beamGeom = new THREE.BufferGeometry().setFromPoints(beamPoints);
      const beamMat = new THREE.LineBasicMaterial({
        color: m.color,
        transparent: true,
        opacity: 0.35,
      });
      mainGroup.add(new THREE.Line(beamGeom, beamMat));
    });

    // ==========================================
    // 5. STREAMING PARTICLES (0 -> 1 FLOW)
    // ==========================================
    const particleCount = 450;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 8.0; // X across bridge
      particlePositions[i * 3 + 1] = -0.55 + (Math.random() - 0.5) * 0.4; // Y on deck
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 1.0; // Z on deck
      particleSpeeds[i] = 0.02 + Math.random() * 0.04;
    }

    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Particle Texture Canvas
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(8, 8, 7, 0, Math.PI * 2);
    ctx.fillStyle = '#60A5FA';
    ctx.fill();
    const particleTex = new THREE.CanvasTexture(canvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      map: particleTex,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particleSystem = new THREE.Points(particleGeom, particleMat);
    mainGroup.add(particleSystem);

    // ==========================================
    // 6. LIGHTING
    // ==========================================
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x3B82F6, 4);
    dirLight1.position.set(5, 8, 6);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x10B981, 3);
    dirLight2.position.set(-6, -4, 4);
    scene.add(dirLight2);

    // ==========================================
    // 7. INTERACTION & ANIMATION LOOP
    // ==========================================
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      targetX = (event.clientX / window.innerWidth) * 2 - 1;
      targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;

      // Subtle dynamic bridge angle
      mainGroup.rotation.y = -0.3 + mouseX * 0.45;
      mainGroup.rotation.x = 0.15 + mouseY * 0.25;
      mainGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.08;

      // Rotate Stage 0 & 1 nodes
      node0.rotation.x = elapsedTime * 0.5;
      node0.rotation.y = elapsedTime * 0.6;

      node1.rotation.x = -elapsedTime * 0.6;
      node1.rotation.y = -elapsedTime * 0.5;

      // Rotate central gyroscope engine
      ring1.rotation.x = elapsedTime * 1.2;
      ring1.rotation.y = elapsedTime * 0.8;
      ring2.rotation.y = -elapsedTime * 1.0;
      ring2.rotation.z = elapsedTime * 0.7;

      // Bob floating milestone nodes
      milestoneNodes.forEach((node) => {
        node.rotation.y += 0.02;
        node.rotation.x += 0.01;
        node.position.y = node.userData.initialY + Math.sin(elapsedTime * node.userData.speed) * 0.06;
      });

      // Stream particles from 0 (Left) to 1 (Right) across Setu Bridge
      const positions = particleSystem.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += particleSpeeds[i];
        if (positions[i * 3] > 4.0) {
          positions[i * 3] = -4.0; // Reset back to Stage 0
        }
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[460px] lg:min-h-[580px] pointer-events-none relative z-10"
    />
  );
}
