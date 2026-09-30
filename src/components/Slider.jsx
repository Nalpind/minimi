import { useZStore } from "../store/useZStore";
import { HexColorPicker } from "react-colorful";

export const Slider = () => {
  const selectedAssets = useZStore((state) => state.selectedAssets);
  const active = useZStore((state) => state.active);
  const setScale = useZStore((state) => state.setScale);
  const setColor = useZStore((state) => state.setColor);
  const setPosition = useZStore((state) => state.setPosition);
  const setRotate = useZStore((state) => state.setRotate);
  const curAsset = useZStore((state) => state.assetList[selectedAssets[active]]);

  const handleScale = (event) => {
    setScale(Number(event.target.value), selectedAssets[active]);
  };

  const handleColor = (color) => {
    setColor(color, selectedAssets[active]);
  };
  const handleRotate = (event) => {
    setRotate(Number(event.target.value), selectedAssets[active]);
  };

  const handlePosition = (event) => {
    if (event.target.value) {
      const axis = event.target.name;
      setPosition({ ...curAsset.position, [axis]: Number(event.target.value) }, selectedAssets[active]);
    }
  };

  return (
    <>
      <div className="flex h-full w-full flex-col">
        {selectedAssets[active]}
        <div className="flex h-full w-full flex-row-reverse lg:flex-col">
          <div className="colorPick h-full w-full">
            <HexColorPicker color={curAsset.color} onChangeEnd={(color) => handleColor(color)} />
          </div>
          <div className="flex flex-col gap-3 text-sm lg:flex-row">
            <div>
              {curAsset?.position != null && (
                <div>
                  <div>Position: </div>
                  <div className="flex flex-row justify-between">
                    <input type="range" id="x" step="0.25" min="-5" max="5" name="x" value={curAsset.position.x} onChange={handlePosition} />
                    <div>x: </div>
                    <input className="w-1/6 rounded-sm" type="number" id="xNum" label={"xNum"} name="x" value={curAsset.position.x} onChange={handlePosition} />
                  </div>
                  <div className="flex flex-row justify-between">
                    <input type="range" id="y" step="0.25" min="-5" max="5" name="y" value={curAsset.position.y} onChange={handlePosition} />
                    <div>y: </div>

                    <input className="w-1/6 rounded-sm" type="number" id="yNum" label={"yNum"} name="y" value={curAsset.position.y} onChange={handlePosition} />
                  </div>
                  <div className="flex flex-row justify-between">
                    <input type="range" id="z" step="0.25" min="-5" max="5" name="z" value={curAsset.position.z} onChange={handlePosition} />
                    <div>z: </div>

                    <input className="w-1/6 rounded-sm" type="number" id="zNum" label={"zNum"} name="z" value={curAsset.position.z} onChange={handlePosition} />
                  </div>
                </div>
              )}
            </div>
            <div>
              {curAsset?.scale != null && (
                <div>
                  Scale:
                  <input className="w-1/6 rounded-sm" type="number" id="scale" label={"Scale"} name="scale" value={curAsset.scale} onChange={handleScale} />
                  <div className="flex flex-row justify-between">
                    <input type="range" id="scaler" label={"Scaler"} step="0.25" min="0.25" max="5" name="slider" value={curAsset.scale} onChange={handleScale} />
                  </div>
                </div>
              )}

              {curAsset?.rotate != null && (
                <div>
                  Rotate:
                  <input className="w-1/6 rounded-sm" type="number" id="rotate" label={"Rotate"} name="rotate" value={curAsset.rotate} onChange={handleRotate} />
                  <div className="flex flex-row justify-between">
                    <input type="range" id="rotater" label={"Rotater"} min="-180" max="180" name="rotater" value={curAsset.rotate} onChange={handleRotate} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
