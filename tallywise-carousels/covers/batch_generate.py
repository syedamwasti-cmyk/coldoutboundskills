#!/usr/bin/env python3
"""
Batch-generate the 30 Tallywise carousel covers via the Higgsfield API.

This loops covers.json and saves each result as <filename> into ./ (this covers/ dir).
Move/keep them in ../public/covers/ for the renderer to pick up.

⚠️ BEFORE RUNNING — confirm two things against Higgsfield's current API docs
   (https://higgsfield.ai → API / developer settings), because endpoints change:
     1) HF_API_URL  — the text-to-image endpoint
     2) the request JSON field names (prompt / aspect_ratio / model) and where the
        image URL comes back in the response (RESULT_URL_PATH below)
   Set your key:   export HIGGSFIELD_API_KEY=sk-...

If you'd rather not touch the API, ignore this file — just paste each prompt from
covers.txt into the Higgsfield web app and save the best of 4 under the listed filename.
"""
import json, os, sys, time, pathlib, urllib.request, urllib.error

HF_API_KEY   = os.environ.get("HIGGSFIELD_API_KEY", "")
HF_API_URL   = os.environ.get("HF_API_URL", "https://api.higgsfield.ai/v1/images/generate")  # <-- confirm
MODEL        = os.environ.get("HF_MODEL", "soul")           # <-- confirm model id
ASPECT       = "4:5"
RESULT_URL_PATH = ("data", 0, "url")                        # <-- confirm response shape

here = pathlib.Path(__file__).parent
covers = json.loads((here / "covers.json").read_text())

def dig(obj, path):
    for k in path:
        obj = obj[k]
    return obj

def post(prompt):
    body = json.dumps({"prompt": prompt, "model": MODEL, "aspect_ratio": ASPECT}).encode()
    req = urllib.request.Request(HF_API_URL, data=body, method="POST", headers={
        "Authorization": f"Bearer {HF_API_KEY}",
        "Content-Type": "application/json",
    })
    with urllib.request.urlopen(req, timeout=180) as r:
        return json.loads(r.read())

def fetch(url, dest):
    with urllib.request.urlopen(url, timeout=180) as r:
        dest.write_bytes(r.read())

def main():
    if not HF_API_KEY:
        sys.exit("Set HIGGSFIELD_API_KEY first (export HIGGSFIELD_API_KEY=...).")
    for i, c in enumerate(covers, 1):
        dest = here / c["filename"]
        if dest.exists():
            print(f"[{i:02d}] skip (exists) {c['filename']}"); continue
        try:
            resp = post(c["prompt"])
            url = dig(resp, RESULT_URL_PATH)
            fetch(url, dest)
            print(f"[{i:02d}] saved {c['filename']}")
        except urllib.error.HTTPError as e:
            print(f"[{i:02d}] HTTP {e.code} for {c['filename']}: {e.read()[:200]!r}")
        except Exception as e:
            print(f"[{i:02d}] error for {c['filename']}: {e}")
        time.sleep(2)  # be gentle on rate limits

if __name__ == "__main__":
    main()
