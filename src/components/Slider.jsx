import { useZStore } from "../store/useZStore";
import { HexColorPicker } from "react-colorful";

export const Slider = () => {
  const selectedAssets = useZStore((state) => state.selectedAssets);
  const active = useZStore((state) => state.active);
  const setScale = useZStore((state) => state.setScale);
  const setColor = useZStore((state) => state.setColor);
  const setPosition = useZStore((state) => state.setPosition);
  const setRotation = useZStore((state) => state.setRotation);

  const curAsset = useZStore((state) => state.assetList[selectedAssets[active]]);

  const handleScale = (event) => {
    if (event.target.value) {
      setScale(event.target.value, selectedAssets[active]);
    }
  };

  const handleColor = (color) => {
    setColor(color, selectedAssets[active]);
  };
  const handleRotation = (event) => {
    if (event.target.value) {
      setRotation(event.target.value, selectedAssets[active]);
    }
  };

  const handlePosition = (event) => {
    if (event.target.value) {
      const axis = event.target.name;
      setPosition({ ...curAsset.position, [axis]: event.target.value }, selectedAssets[active]);
    }
  };

  return (
    <>
      <div className="flex flex-row">
        <div className="flex w-2/3 flex-col">
          <div>{selectedAssets[active]}</div>
          <div>
            {curAsset?.scale ? (
              <div className="flex flex-row gap-1">
                <div>Scale: </div>
                <input type="range" id="scaler" label={"Scaler"} step="0.25" min="0.25" max="5" name="slider" value={curAsset.scale} onChange={handleScale} />
                <input type="number" id="scale" label={"Scale"} name="scale" value={curAsset.scale} onChange={handleScale} />
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            {curAsset?.rotation != null ? (
              <div>
                <div>Rotation: </div>
                <input type="range" id="rotater" label={"Rotater"} min="0" max="20" name="rotator" value={curAsset.rotation} onChange={handleRotation} />
                <input type="number" id="rotation" label={"Rotation"} name="rotation" value={curAsset.rotation} onChange={handleRotation} />
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            {curAsset?.position ? (
              <div className="flex flex-col">
                <div>Position: </div>
                <label>
                  x:
                  <input type="range" id="a" label={"ss"} step="0.25" min="-5" max="5" name="x" value={curAsset.position.x} onChange={handlePosition} />
                </label>
                <label>
                  y:
                  <input type="range" id="b" label={"ss"} step="0.25" min="-5" max="5" name="y" value={curAsset.position.y} onChange={handlePosition} />
                </label>
                <label>
                  z:
                  <input type="range" id="c" label={"ss"} step="0.25" min="-5" max="5" name="z" value={curAsset.position.z} onChange={handlePosition} />
                </label>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {curAsset?.color ? <HexColorPicker color={curAsset.color} onChangeEnd={(color) => handleColor(color)} /> : ""}
      </div>
    </>
  );
};
