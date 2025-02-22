---
{"dg-publish":true,"dg-permalink":"gallery","permalink":"/gallery/","pinned":true,"contentClasses":"gallery","created":"2024-03-30T16:43:00.000+00:00","updated":"2025-02-22T15:32:55.872+00:00"}
---

<div class="grid">

<img src="/img/user/resources/17B169E1-209F-4C39-83C9-4810D4B8D3A1_1_105_c.jpeg">

<img src="/img/user/resources/ABA157ED-A059-4945-B372-E9B3D2313712_1_105_c.jpeg">

<img src="/img/user/resources/F2CCDF96-4F2B-415B-992B-9EC384FB8C78_1_105_c.jpeg">

<img src="/img/user/resources/D2996410-F66B-499D-8A01-C9956F0153A2_1_105_c.jpeg">

<img src="/img/user/resources/99D6C606-4DC3-4039-B39A-05E1131FA71E_1_105_c.jpeg">

<img src="/img/user/resources/6222AA52-170A-4387-A5DB-CE48778079CB_1_105_c.jpeg">

<img src="/img/user/resources/A1D93698-E621-4D71-B225-342AFED068B4_1_105_c.jpeg">

<img src="/img/user/resources/B734C666-5548-400F-B9EA-E96CFC9B4970_1_105_c.jpeg">

<img src="/img/user/resources/7AA2AC17-2BD5-4DE8-8D0F-AC53E298221A_1_105_c.jpeg">

<img src="/img/user/resources/EE3FFCD5-D5BD-4434-80C0-145C0D6D46BD_1_105_c.jpeg">

<img src="/img/user/resources/E0268449-59F0-4A1E-B5F6-6558224B4E20_1_105_c.jpeg">

<img src="/img/user/resources/98D2B380-BFBC-4DCA-B695-2CBBC5D8DD7E_1_105_c.jpeg">

<img src="/img/user/resources/7EFA9604-CF4C-43C2-8A88-8C1F317BDA7D_1_105_c.jpeg">

<img src="/img/user/resources/A5018EFD-7BD0-4FC3-A323-E0749DBDD57B.jpeg">

</div>

  
  

<style>

  

.grid {

border: 1px solid #ddd;

column-count: 4;

column-gap: 1rem;

padding: 1rem;

}

  

@media (max-width: 1200px) {

.grid {

column-count: 3;

}

}

  

@media (max-width: 800px) {

.grid {

column-count: 2;

}

}

  

@media (max-width: 400px) {

.grid {

column-count: 1;

}

}

  

/* Only target images that come after #start within .grid */

.grid img {

width: 100%;

height: auto;

margin-bottom: 1rem;

display: block;

cursor: pointer;

transition: opacity 0.3s ease;

}

  

.grid img:hover {

opacity: 0.9;

}

  

/* Modal styles */

.modal {

display: none;

position: fixed;

top: 0;

left: 0;

right: 0;

bottom: 0;

background: rgba(0, 0, 0, 0.9);

z-index: 1000;

padding: 2rem;

box-sizing: border-box;

}

  

.modal.active {

display: flex;

justify-content: center;

align-items: center;

}

  

.modal img {

max-width: 90%;

max-height: 90vh;

object-fit: contain;

}

  

.close-button {

position: absolute;

top: 1rem;

right: 1rem;

background: white;

border: none;

width: 2rem;

height: 2rem;

border-radius: 50%;

cursor: pointer;

display: flex;

align-items: center;

justify-content: center;

font-size: 1.2rem;

font-weight: bold;

}

  

.close-button:hover {

background: #eee;

}

</style>

  

<script>

// Create modal elements

const modal = document.createElement('div');

modal.className = 'modal';

const modalImg = document.createElement('img');

const closeButton = document.createElement('button');

closeButton.className = 'close-button';

closeButton.innerHTML = '×';

modal.appendChild(modalImg);

modal.appendChild(closeButton);

document.body.appendChild(modal);

  

// Add click handlers only to gallery images after #start

document.querySelectorAll('.grid img').forEach(img => {

img.addEventListener('click', () => {

modalImg.src = img.src;

modal.classList.add('active');

});

});

  

// Close modal when clicking close button or outside the image

closeButton.addEventListener('click', () => {

modal.classList.remove('active');

});

  

modal.addEventListener('click', (e) => {

if (e.target === modal) {

modal.classList.remove('active');

}

});

  

// Close modal with escape key

document.addEventListener('keydown', (e) => {

if (e.key === 'Escape' && modal.classList.contains('active')) {

modal.classList.remove('active');

}

});

</script>