
const wrapper = document.querySelector('.wrapper')


const urlParams = new URLSearchParams(window.location.search);
const slug = urlParams.get('slug')

async function getFood(slug) {
    const response = await fetch(`https://hwfakeapi.cloud/products/${slug}`);
    const data = await response.json();

    showDisplay(data);

    return data;

}

getFood(slug)


function showDisplay({brand,description,thumbnail,title}) {
  
    wrapper.innerHTML =
        `
            <div class="col-span-4">
                <img src=${thumbnail} class="w-full aspect-square h-full" alt="">
            </div>
            <div class="col-span-8 space-y-3 dark:text-gray-50">
                <p class="text-2xl">${brand}</p>
                <p class="text-xl">${title}</p>
                <p>${description}</p>
            </div>
    `
}