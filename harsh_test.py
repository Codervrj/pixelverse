import os
import time
import threading
import hashlib
import random
import socket
import urllib.request
from statistics import mean

SCORES = {}

CPU_CORES = os.cpu_count() or 2
TEST_DURATION = 120  # seconds per workload

def clamp(x): return max(0, min(100, int(x)))

# ---------------- CPU APP ----------------
def cpu_app():
    start = time.time()
    ops = 0
    while time.time() - start < TEST_DURATION:
        hashlib.sha256(os.urandom(1024)).digest()
        ops += 1
    score = clamp(ops / 5000)
    SCORES["CPU_APP"] = score
    print(f"[CPU APP] ops={ops} score={score}")

# ---------------- MEMORY APP ----------------
def memory_app():
    start = time.time()
    blocks = []
    try:
        while time.time() - start < TEST_DURATION:
            blocks.append(bytearray(10 * 1024 * 1024))  # 10MB
            time.sleep(0.1)
    except MemoryError:
        pass
    score = clamp(len(blocks) * 5)
    SCORES["MEMORY_APP"] = score
    print(f"[MEMORY APP] blocks={len(blocks)} score={score}")

# ---------------- DISK APP ----------------
def disk_app():
    fname = "harsh_disk.tmp"
    start = time.time()
    written = 0
    with open(fname, "wb") as f:
        while time.time() - start < TEST_DURATION:
            f.write(os.urandom(5 * 1024 * 1024))
            written += 5
    os.remove(fname)
    score = clamp(written / 50)
    SCORES["DISK_APP"] = score
    print(f"[DISK APP] MB_written={written} score={score}")

# ---------------- NETWORK APP ----------------
def network_app():
    start = time.time()
    hits = 0
    while time.time() - start < TEST_DURATION:
        try:
            req = urllib.request.Request(
                "https://example.com",
                headers={"User-Agent": "harsh-load-test"}
            )
            urllib.request.urlopen(req, timeout=5).read(256)
            hits += 1
        except:
            pass
    score = clamp(hits / 20)
    SCORES["NETWORK_APP"] = score
    print(f"[NETWORK APP] hits={hits} score={score}")

# ---------------- CONCURRENCY APP ----------------
def concurrency_app():
    counter = 0
    lock = threading.Lock()

    def worker():
        nonlocal counter
        end = time.time() + TEST_DURATION
        while time.time() < end:
            with lock:
                counter += 1

    threads = []
    for _ in range(16):
        t = threading.Thread(target=worker)
        t.start()
        threads.append(t)
    for t in threads:
        t.join()

    score = clamp(counter / 200000)
    SCORES["CONCURRENCY_APP"] = score
    print(f"[CONCURRENCY APP] ops={counter} score={score}")

# ---------------- MAIN ----------------
print("\n🔥 HARSH MULTI-APP STRESS TEST STARTED 🔥")
print("This simulates multiple production services running together.\n")

threads = [
    threading.Thread(target=cpu_app),
    threading.Thread(target=memory_app),
    threading.Thread(target=disk_app),
    threading.Thread(target=network_app),
    threading.Thread(target=concurrency_app),
]

for t in threads:
    t.start()
for t in threads:
    t.join()

final_score = int(mean(SCORES.values()))

print("\n===================================")
print("🔥 HARSH MULTI-APP SCORE 🔥")
print("===================================")
for k, v in SCORES.items():
    print(f"{k:<18}: {v}/100")
print("-----------------------------------")
print(f"🔥 OVERALL HARSH SCORE: {final_score}/100")
print("===================================")

if final_score >= 85:
    print("🟢 MONSTER SERVER – handles heavy multi-app workloads")
elif final_score >= 70:
    print("🟡 STRONG – safe for real production stacks")
elif final_score >= 50:
    print("🟠 MODERATE – needs tuning / limits")
else:
    print("🔴 WEAK – will collapse under load")
