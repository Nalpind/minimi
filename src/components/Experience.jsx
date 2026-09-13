import { OrbitControls, useGLTF } from "@react-three/drei";
import { useZStore } from "../store/useZStore";
import { Suspense } from "react";
import { Preload } from "@react-three/drei";

function Model(props) {
  const [body, head] = useGLTF([`{import.meta.env.BASE_URL}3D/Body.glb`, `{import.meta.env.BASE_URL}3D/Head.glb`]);
  return (
    <group>
      <primitive object={body.scene} {...props} />
      <primitive object={head.scene} {...props} />
    </group>
  );
}

export const Experience = () => {
  const { active } = useZStore();
  useGLTF.preload(["/3D/Body.glb", "/3D/Head.glb"]);

  return (
    <>
      <color attach="background" args={["#0f172a"]} />
      <ambientLight intensity={1.4} />
      <directionalLight position={[3, 4, 5]} intensity={2} />
      <OrbitControls
        enablePan={false}
        maxPolarAngle={Math.PI * 0.9}
        minPolarAngle={Math.PI * 0.2}
      />
      {active === "hat" ? (
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
        </mesh>
      ) : (
        <Suspense>
          <Preload all />
          <Model position={[0, -1, 0]} />
        </Suspense>
      )}
    </>
  );
};
