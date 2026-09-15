import re
import urllib.parse

with open('original.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace next images
def replace_img(match):
    encoded_url = match.group(1)
    decoded = urllib.parse.unquote(encoded_url)
    if decoded.startswith('/'):
        decoded = decoded[1:]
    # some images are directly in images/ directory downloaded
    # specifically, mentors are in images/mentors/
    # logo is images/logo.png
    if not decoded.startswith('images/'):
        if decoded in ['vikrambanand.webp', 'Ashish_kulkarni.webp', 'vaibhav_bhargava.webp', 'harsh_gupta.webp', 'pavan_dd.webp', 'moongoel.webp', 'mahendra.webp', 'akash.webp', 'deric.webp', 'debashis.webp', 'anant.webp', 'gaurav.webp']:
            decoded = 'images/mentors/' + decoded
        elif decoded == 'logo.png':
            decoded = 'images/logo.png'
        elif decoded.startswith('gallery/'):
            decoded = 'images/' + decoded
    return f'src="{decoded}"'

html = re.sub(r'src="/_next/image\?url=([^&"]+)&amp;w=\d+&amp;q=\d+"', replace_img, html)
html = re.sub(r'src="/_next/image\?url=([^&"]+)&w=\d+&q=\d+"', replace_img, html)

# Remove srcSets to force fallback to src
html = re.sub(r'srcSet="[^"]+"', '', html)
html = re.sub(r'imageSrcSet="[^"]+"', '', html)

# Fix CSS paths
html = re.sub(r'href="/_next/static/chunks/([a-z0-9]+\.css)"', r'href="css/\1"', html)

# Strip Next.js scripts
html = re.sub(r'<script.*?>.*?</script>', '', html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Cleaned index.html generated.")
