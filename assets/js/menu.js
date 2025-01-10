
const wrapper = document.querySelector('.wrapper')
const pagination = document.querySelector('.pagination')

let currentPage = 1
async function getFoods(page) {
    const response = await fetch(`https://hwfakeapi.cloud/products?limit=20&currentPage=${page}`);
    const data = await response.json();


    const { pageCount, products } = data

    showPagination(pageCount)

    showDisplay(products)


    return data;

}

getFoods(0)

function showDisplay(products) {

    wrapper.innerHTML = ''
    products.map((e, i) => {
        const { title, thumbnail,slug } = e
       
        
        const div = document.createElement('a')
        div.href=`detail.html?slug=${slug}`
        div.className = 'rounded-md overflow-hidden text-center relative group'
        div.innerHTML = `
                    <div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full opacity-10 group-hover:opacity-100 duration-500">
                        <p>${title}</p>
                    </div>
                    <img class="w-full aspect-square" src="${thumbnail}" alt="">
                    
        `
        wrapper.append(div)
    })
}


function showPagination(pageCount){
    pagination.innerHTML = ''
              
    const start = document.createElement('span')
    start.className = 'material-symbols-outlined cursor-pointer h-8 text-center flex justify-center items-center text-gray-50 dark:bg-gray-300 cursor-pointer hover:opacity-70 duration-300 dark:text-gray-900 w-8 rounded-sm bg-gray-600'
    start.textContent = 'first_page'
    pagination.append(start)

    start.addEventListener('click',getFirstPage)

    for(let i = currentPage >= 4 ? currentPage -2 : 1; i <=  (pageCount - currentPage < 2 ? pageCount+1 : currentPage +2) ;i++){
        const span = document.createElement('span')
        span.className =`${currentPage == i ? 'opacity-60' : 'opacity-100'} h-8 text-center flex justify-center items-center text-gray-50 dark:bg-gray-300 cursor-pointer hover:opacity-70 duration-300 dark:text-gray-900 w-8 rounded-sm bg-gray-600`
        span.textContent = i
        span.addEventListener('click',()=>getPage(i))
        pagination.append(span)
    }


    const end = document.createElement('span')
    end.className = 'material-symbols-outlined cursor-pointer h-8 text-center flex justify-center items-center text-gray-50 dark:bg-gray-300 cursor-pointer hover:opacity-70 duration-300 dark:text-gray-900 w-8 rounded-sm bg-gray-600'
    end.textContent = 'last_page'

    end.addEventListener('click',()=>getLastPage(pageCount))

    pagination.append(end)
}

function getFirstPage(){
    currentPage = 1
    getFoods(0)
}

function getLastPage(pageCount){

    currentPage = pageCount + 1
    getFoods(pageCount)
}

function getPage(i){
    currentPage = i
    getFoods(i-1)
}