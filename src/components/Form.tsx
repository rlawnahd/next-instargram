import React from 'react';

export default function Form() {
    return (
        <form className="w-full flex flex-col mt-2" action={}>
            <input
                className="hidden"
                name="input"
                id="input-upload"
                type="file"
                accept="image/*"
                onChange={handleChange}
            />
            <label
                className={`w-full h-60 flex flex-col items-center justify-center ${
                    !file && 'border-2 border-sky-500 border-dashed'
                }`}
                htmlFor="input-upload"
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                {dragging && <div className="absolute inset-0 z-10 bg-sky-500/20 pointer-events-none"></div>}
                {!file && (
                    <div className="flex flex-col items-center pointer-events-none">
                        <FilesIcon />
                        <p>Drag and Drop your image here or click</p>
                    </div>
                )}
                {file && (
                    <div className="relative w-full aspect-square">
                        <Image
                            className="object-cover"
                            src={URL.createObjectURL(file)}
                            alt="local file"
                            fill
                            sizes="650px"
                        />
                    </div>
                )}
            </label>
            <textarea
                className="outline-none text-lg border border-neutral-300"
                name="text"
                id="input-text"
                required
                rows={10}
                placeholder={'Write a caption...'}
                ref={textRef}
            />
            <Button text="Publish" onClick={() => {}} />
        </form>
    );
}
