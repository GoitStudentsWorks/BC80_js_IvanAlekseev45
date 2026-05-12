import refs from './refs';

let skeletonList = document.createElement('ul');
skeletonList.classList.add('custom-skeleton__desserts');

const dessertsCreateSkeleton = (count = 8) => {
  const markup = Array.from({ length: count })
    .map(
      () => `
        <li class="dessert-list__skeleton">
          <div class="dessert-list__wrapper">
  
            <div class='loader-sizes-skeleton'>
              <div class="loader dessert-loader">
                <div class="cup">
                  <div class="cup-handle"></div>
                  <div class="smoke one"></div>
                  <div class="smoke two"></div>
                  <div class="smoke three"></div>
                </div>
                <div class="load">..........................</div>
              </div>
            </div>
          </div>
        </li>
        `,
    )
    .join('');

  skeletonList.innerHTML = markup;

  refs.dessertList.appendChild(skeletonList);
};

const dessertsRemoveSkeleton = () => {
  skeletonList.remove();
};

export default { dessertsCreateSkeleton, dessertsRemoveSkeleton };
