import os
import sys
from PIL import Image

def compress_image(file_path, max_size=(1920, 1080), quality=80):
    try:
        # Check original size
        original_size = os.path.getsize(file_path)
        if original_size < 100 * 1024:  # Skip files smaller than 100KB
            return

        with Image.open(file_path) as img:
            # Handle RGBA/P transparent images converting to JPEG
            if img.mode in ("RGBA", "P") and file_path.lower().endswith((".jpg", ".jpeg")):
                img = img.convert("RGB")

            # Resize keeping aspect ratio
            img.thumbnail(max_size, Image.Resampling.LANCZOS)
            
            # Save compressed
            if file_path.lower().endswith((".jpg", ".jpeg")):
                img.save(file_path, "JPEG", optimize=True, quality=quality)
            elif file_path.lower().endswith(".png"):
                # Save PNG optimized
                img.save(file_path, "PNG", optimize=True)
            
            new_size = os.path.getsize(file_path)
            reduction = ((original_size - new_size) / original_size) * 100
            print(f"Compressed: {os.path.basename(file_path)}")
            print(f"   Size: {original_size/1024/1024:.2f} MB -> {new_size/1024/1024:.2f} MB ({reduction:.1f}% reduction)")
    except Exception as e:
        print(f"Error compressing {file_path}: {e}")

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(script_dir)
    
    target_dirs = [
        os.path.join(project_root, "public"),
    ]
    
    print("Scanning for large images to compress...")
    image_count = 0
    
    for target_dir in target_dirs:
        if not os.path.exists(target_dir):
            continue
            
        for root, _, files in os.walk(target_dir):
            for file in files:
                if file.lower().endswith((".jpg", ".jpeg", ".png")):
                    file_path = os.path.join(root, file)
                    compress_image(file_path)
                    image_count += 1
                    
    if image_count == 0:
        print("No images found in the target folders.")
    else:
        print(f"\nDone! Processed {image_count} images.")

if __name__ == "__main__":
    # Ensure Pillow is installed
    try:
        import PIL
    except ImportError:
        print("Pillow (PIL) is not installed. Please install it with: pip install Pillow")
        sys.exit(1)
        
    main()
