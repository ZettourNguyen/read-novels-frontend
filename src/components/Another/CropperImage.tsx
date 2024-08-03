import { ChangeEvent, useEffect, useRef, useState } from "react";
import "cropperjs/dist/cropper.css";
import Cropper from "cropperjs";

interface CropperImageProps {
    onCropComplete: (croppedImageUrl: string | null) => void; // Callback để gửi ảnh đã cắt
}

export default function CropperImage({ onCropComplete }: CropperImageProps) {
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const [cropper, setCropper] = useState<Cropper | null>(null);
    const [croppedImageUrl, setCroppedImageUrl] = useState<string | null>(null);

    useEffect(() => {
        if (imageRef.current && preview) {
            const newCropper = new Cropper(imageRef.current, {
                aspectRatio: 3 / 4,
                viewMode: 1,
                autoCropArea: 1,
            });
            setCropper(newCropper);

            return () => {
                newCropper.destroy();
            };
        }
    }, [preview]);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleCrop = () => {
        if (cropper) {
            const croppedCanvas = cropper.getCroppedCanvas({
                width: 300,
                height: 400
            });
            const croppedImage = croppedCanvas.toDataURL('image/jpeg', 1.0);
            setCroppedImageUrl(croppedImage);
            onCropComplete(croppedImage); // Gọi callback để truyền ảnh đã cắt
        }
    };

    return (
        <div className="flex">
            <div className="flex-1 bg-white h-max w-max
">

                <div className="mb-5">
                    <div className="my-1 mx-1">Chọn ảnh</div>
                    <div className="flex mx-1">
                        <div className="border border-gray flex rounded-md p-[2px] flex-1 mr-2">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="ml-1 p-2 w-full outline-none"
                            />
                        </div>
                    </div>
                </div>

                {preview && (
                    <div className="mt-5 mx-1">
                        <div className="flex my-1">
                            <div className="">Ảnh đã chọn</div>
                            {/* <div className="text-red ml-3">Phải chọn Cắt ảnh cho ra kết quả mới được chọn tiếp theo</div> */}
                        </div>
                        <div className="relative border border-gray rounded-md  w-full max-w-[99%] h-72 overflow-hidden">
                            <img
                                ref={imageRef} 
                                src={preview}
                                alt="Preview"
                                className="w-full h-full object-contain"
                            />
                            <button
                                onClick={handleCrop}
                                className="absolute top-2 right-2 bg-sky_blue_light text-white px-4 py-2 rounded-md"
                            >   
                                Cắt ảnh
                            </button>
                        </div>
                    </div>
                )}

                {/* {croppedImageUrl && (
                    <div className="mt-5 mx-1">
                        <div className="my-1">Ảnh đã cắt</div>
                        <div className="bg-gray_light border border-gray rounded-md p-2 w-full max-w-[99%] h-72 overflow-hidden">
                            <img
                                src={croppedImageUrl}
                                alt="Cropped"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                )} */}
            </div>
        </div>
    );
}
