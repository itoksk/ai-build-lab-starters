# The 4-dial Stable Diffusion snippet from /works/image-four-dials.
# Run this in Colab with a T4 GPU (Runtime → Change runtime type → T4 GPU).
# The four dials you turn by hand: CFG, steps, seed, negative prompt.
#
# Colab lab (one click):
#   https://colab.research.google.com/github/itoksk/summer-ai-materials/blob/main/materials/notebooks/image_gen_advanced.ipynb
# Local/terminal version:
#   https://github.com/itoksk/summer-ai-materials/blob/main/materials/scripts/image_gen.py

import torch
from diffusers import StableDiffusionPipeline, DPMSolverMultistepScheduler

# pick ONE model_id (leave one uncommented):
model_id = "stablediffusionapi/anything-v5"             # anime / illustration
# model_id = "stable-diffusion-v1-5/stable-diffusion-v1-5"   # general base
# model_id = "SG161222/Realistic_Vision_V5.1_noVAE"     # photo-real (Western-leaning data)

pipe = StableDiffusionPipeline.from_pretrained(model_id, torch_dtype=torch.float16, safety_checker=None)
pipe.scheduler = DPMSolverMultistepScheduler.from_config(pipe.scheduler.config)
pipe = pipe.to('cuda')

prompt          = 'a cozy ramen shop on a rainy night, neon signs, watercolor style'
negative_prompt = 'low quality, blurry, text, watermark'   # what to keep OUT
seed            = 42        # same seed + same prompt  ->  same image

generator = torch.Generator('cuda').manual_seed(seed)
image = pipe(prompt, negative_prompt=negative_prompt,
             guidance_scale=7.0,        # CFG: how hard to obey the prompt
             num_inference_steps=25,    # denoising passes
             width=512, height=512, generator=generator).images[0]
image


# ── The dials, as plain variables you can sweep ──────────────────────────────
prompt    = 'photo of a red apple on a white background'
n_prompt  = 'blurry, extra fingers, text, watermark'   # negative prompt
CFG_scale = 7        # how hard to follow the prompt (about 7 = balanced)
Steps     = 20       # denoising passes (more = finer, slower)
seed      = 12345    # same seed + same prompt  ->  same image, every run

image = pipe(prompt, negative_prompt=n_prompt,
             guidance_scale=CFG_scale, num_inference_steps=Steps,
             generator=torch.Generator('cuda').manual_seed(seed)).images[0]
