import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ArrowUpRight } from 'lucide-react';

export default function Globe3D() {
  const mountRef = useRef(null);
  const [activeHubIndex, setActiveHubIndex] = useState(0);

  const hubs = [
    {
      name: 'Bangalore & Chennai',
      sub: 'IIT-Madras DeepTech Hub',
      metric: '14 Active Startups',
      lat: 12.9716,
      lon: 77.5946,
      color: 0x34D399,
      accent: 'text-emerald-400',
      badge: 'Anchor Campus'
    },
    {
      name: 'Silicon Valley',
      sub: 'San Francisco Seed Corridor',
      metric: '$18.4M Institutional Capital',
      lat: 37.7749,
      lon: -122.4194,
      color: 0x10B981,
      accent: 'text-emerald-300',
      badge: 'Seed Syndicate'
    },
    {
      name: 'Mumbai & Delhi',
      sub: 'IIM Enterprise & BFSI Pipeline',
      metric: '22 Enterprise Pilots',
      lat: 19.0760,
      lon: 72.8777,
      color: 0x6EE7B7,
      accent: 'text-teal-300',
      badge: 'Enterprise Hub'
    },
    {
      name: 'Singapore',
      sub: 'SEA Cross-Border Expansion',
      metric: '6 Global Markets',
      lat: 1.3521,
      lon: 103.8198,
      color: 0xA7F3D0,
      accent: 'text-emerald-200',
      badge: 'APAC Node'
    }
  ];

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. SCENE & CAMERA SETUP
    const scene = new THREE.Scene();
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 5.8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const R = 1.62; // Globe Radius

    // Helper: Lat/Long to 3D Cartesian coordinates
    const latLongToVector = (lat, lon, radius = R) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    };

    // ========================================================
    // 2. REALISTIC CONTINENTAL POINT MATRIX (GEOGRAPHIC MASKS)
    // ========================================================
    const isLandCoordinate = (lat, lon) => {
      // India & South Asia
      if (lat >= 6 && lat <= 35 && lon >= 65 && lon <= 95) return true;
      // North America
      if (lat >= 15 && lat <= 65 && lon >= -135 && lon <= -60) return true;
      // Europe
      if (lat >= 35 && lat <= 68 && lon >= -10 && lon <= 45) return true;
      // East & Southeast Asia
      if (lat >= -10 && lat <= 52 && lon >= 95 && lon <= 145) return true;
      // Middle East
      if (lat >= 12 && lat <= 40 && lon >= 35 && lon <= 65) return true;
      // South America
      if (lat >= -55 && lat <= 12 && lon >= -80 && lon <= -35) return true;
      // Africa
      if (lat >= -35 && lat <= 35 && lon >= -18 && lon <= 50) return true;
      // Australia
      if (lat >= -42 && lat <= -10 && lon >= 112 && lon <= 155) return true;
      return false;
    };

    const landPoints = [];
    const oceanPoints = [];

    const totalSamples = 3200;
    for (let i = 0; i < totalSamples; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / totalSamples);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const lat = 90 - (phi * 180) / Math.PI;
      const lon = ((theta * 180) / Math.PI) % 360 - 180;

      const pos = latLongToVector(lat, lon, R);

      if (isLandCoordinate(lat, lon)) {
        landPoints.push(pos.x, pos.y, pos.z);
      } else if (Math.random() < 0.12) {
        oceanPoints.push(pos.x, pos.y, pos.z);
      }
    }

    // High-density Land Particles (Emerald & Platinum Mint)
    const landGeom = new THREE.BufferGeometry();
    landGeom.setAttribute('position', new THREE.Float32BufferAttribute(landPoints, 3));
    const landMat = new THREE.PointsMaterial({
      size: 0.045,
      color: 0x6EE7B7,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    const landMesh = new THREE.Points(landGeom, landMat);
    globeGroup.add(landMesh);

    // Subtle Ocean Depth Particles (Deep Forest Jade)
    const oceanGeom = new THREE.BufferGeometry();
    oceanGeom.setAttribute('position', new THREE.Float32BufferAttribute(oceanPoints, 3));
    const oceanMat = new THREE.PointsMaterial({
      size: 0.025,
      color: 0x064E3B,
      transparent: true,
      opacity: 0.3
    });
    const oceanMesh = new THREE.Points(oceanGeom, oceanMat);
    globeGroup.add(oceanMesh);

    // Dark Core Interior Occluder
    const coreGeom = new THREE.SphereGeometry(R * 0.985, 36, 36);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x040608,
      transparent: true,
      opacity: 0.94
    });
    const coreSphere = new THREE.Mesh(coreGeom, coreMat);
    globeGroup.add(coreSphere);

    // Subtle Latitude/Longitude Coordinate Rings (Jade line)
    const wireGeom = new THREE.SphereGeometry(R, 18, 18);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x047857,
      transparent: true,
      opacity: 0.15
    });
    const wire = new THREE.LineSegments(new THREE.WireframeGeometry(wireGeom), wireMat);
    globeGroup.add(wire);

    // ========================================================
    // 3. ATMOSPHERE FRESNEL RIM (EMERALD GLOW)
    // ========================================================
    const atmosphereGeom = new THREE.SphereGeometry(R * 1.12, 36, 36);
    const atmosphereMat = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.68 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.8);
          gl_FragColor = vec4(0.06, 0.72, 0.51, 1.0) * intensity * 0.75;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true
    });
    const atmosphere = new THREE.Mesh(atmosphereGeom, atmosphereMat);
    scene.add(atmosphere);

    // ========================================================
    // 4. VENTURE CORRIDOR BEZIER ARCS & RUNNING PHOTONS
    // ========================================================
    const corridors = [
      { from: hubs[0], to: hubs[1], color: 0x34D399 }, // Bangalore -> SF
      { from: hubs[0], to: hubs[3], color: 0x10B981 }, // Bangalore -> Singapore
      { from: hubs[2], to: hubs[1], color: 0x6EE7B7 }, // Mumbai -> SF
      { from: hubs[0], to: hubs[2], color: 0xA7F3D0 }, // Bangalore -> Mumbai
    ];

    const animatedPhotons = [];

    corridors.forEach((corr, idx) => {
      const vFrom = latLongToVector(corr.from.lat, corr.from.lon, R);
      const vTo = latLongToVector(corr.to.lat, corr.to.lon, R);

      const distance = vFrom.distanceTo(vTo);
      const mid = vFrom.clone().lerp(vTo, 0.5);
      mid.normalize().multiplyScalar(R + distance * 0.28);

      const curve = new THREE.QuadraticBezierCurve3(vFrom, mid, vTo);
      const pts = curve.getPoints(50);

      const arcGeom = new THREE.BufferGeometry().setFromPoints(pts);
      const arcMat = new THREE.LineBasicMaterial({
        color: corr.color,
        transparent: true,
        opacity: 0.5
      });
      const arcMesh = new THREE.Line(arcGeom, arcMat);
      globeGroup.add(arcMesh);

      // Light Packet / Traveling Photon
      const photonGeom = new THREE.SphereGeometry(0.035, 8, 8);
      const photonMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
      const photonMesh = new THREE.Mesh(photonGeom, photonMat);
      globeGroup.add(photonMesh);

      animatedPhotons.push({
        mesh: photonMesh,
        curve,
        speed: 0.18 + idx * 0.05,
        progress: Math.random()
      });
    });

    // ========================================================
    // 5. HUB BEACONS & PULSE RINGS
    // ========================================================
    const beaconMeshes = [];
    hubs.forEach((hub, idx) => {
      const pos = latLongToVector(hub.lat, hub.lon, R);
      const hubPin = new THREE.Group();
      hubPin.position.copy(pos);

      // Core Beacon Point
      const dotGeom = new THREE.SphereGeometry(0.045, 12, 12);
      const dotMat = new THREE.MeshBasicMaterial({ color: hub.color });
      const dot = new THREE.Mesh(dotGeom, dotMat);
      hubPin.add(dot);

      // Expanding Radar Pulse
      const ringGeom = new THREE.RingGeometry(0.05, 0.07, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: hub.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.85
      });
      const ring = new THREE.Mesh(ringGeom, ringMat);
      ring.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), pos.clone().normalize());
      hubPin.add(ring);

      globeGroup.add(hubPin);
      beaconMeshes.push({ group: hubPin, ring, index: idx });
    });

    globeGroup.rotation.y = 1.35;
    globeGroup.rotation.x = 0.22;

    // ========================================================
    // 6. DRAG & MOMENTUM INTERACTION
    // ========================================================
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let velocity = { x: 0.002, y: 0 };

    const onMouseDown = (e) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouse.x;
      const deltaY = e.clientY - prevMouse.y;

      velocity = {
        x: deltaX * 0.004,
        y: deltaY * 0.004
      };

      globeGroup.rotation.y += velocity.x;
      globeGroup.rotation.x += velocity.y;

      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();
    let reqId;

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      if (!isDragging) {
        globeGroup.rotation.y += 0.0025 + velocity.x * 0.1;
        globeGroup.rotation.x += velocity.y * 0.1;
        velocity.x *= 0.94;
        velocity.y *= 0.94;
      }

      beaconMeshes.forEach((b) => {
        const scale = 1 + Math.sin(elapsed * 3.5 + b.index * 1.2) * 0.45;
        b.ring.scale.set(scale, scale, scale);
      });

      animatedPhotons.forEach((p) => {
        p.progress = (p.progress + delta * p.speed) % 1;
        const currentPos = p.curve.getPoint(p.progress);
        p.mesh.position.copy(currentPos);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const currentHub = hubs[activeHubIndex];

  return (
    <div className="relative w-full h-[400px] sm:h-[450px] flex flex-col justify-between select-none">
      {/* 3D WebGL Canvas Layer */}
      <div
        ref={mountRef}
        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing z-0"
      />

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex items-center justify-between pointer-events-none px-2 pt-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-mono tracking-wider text-steel-300 uppercase">
            Global Venture Network
          </span>
        </div>
        <div className="text-[10px] font-mono text-steel-400 border border-white/10 px-2.5 py-0.5 rounded-full bg-obsidian-950/70 backdrop-blur-md">
          Drag to Orbit
        </div>
      </div>

      {/* Bottom Hub Inspector Strip */}
      <div className="relative z-10 flex flex-col gap-2.5 px-2 pb-2">
        {/* Active Hub Telemetry Card */}
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-obsidian-950/75 backdrop-blur-md border border-white/[0.08] shadow-2xl">
          <div>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-mono font-bold tracking-tight ${currentHub.accent}`}>
                {currentHub.name}
              </span>
              <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.06] text-steel-300 border border-white/[0.06]">
                {currentHub.badge}
              </span>
            </div>
            <p className="text-[11px] font-sans text-steel-300 mt-0.5">
              {currentHub.sub}
            </p>
          </div>

          <div className="text-right">
            <span className="text-xs font-mono font-bold text-white block">
              {currentHub.metric}
            </span>
            <span className="text-[9px] font-mono text-emerald-400 flex items-center justify-end gap-0.5 mt-0.5">
              Active Channel <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Hub Selector Tabs */}
        <div className="grid grid-cols-4 gap-1.5">
          {hubs.map((hub, idx) => (
            <button
              key={hub.name}
              type="button"
              onClick={() => setActiveHubIndex(idx)}
              className={`py-1.5 px-2 rounded-lg text-[10px] font-mono font-medium transition-all truncate text-center ${
                activeHubIndex === idx
                  ? 'bg-emerald-500 text-white font-bold shadow-md'
                  : 'bg-obsidian-950/60 backdrop-blur-md text-steel-400 hover:text-white border border-white/[0.06]'
              }`}
            >
              {hub.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
