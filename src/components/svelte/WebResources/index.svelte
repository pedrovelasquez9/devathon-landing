<script>
  export let resourceList = [];
  let resourceListCopy = structuredClone(resourceList);

  const searchQueryIsEmpty = (searchQueryValue) => {
    return searchQueryValue.trim().length === 0;
  };

  const returnOriginalList = () => {
    resourceListCopy = resourceList;
  };

  const searchResource = (evt) => {
    const queryValue = evt.target.value;
    resourceListCopy = resourceList;

    if (!searchQueryIsEmpty(queryValue)) {
      resourceListCopy = resourceListCopy
        .map((categories) => {
          return {
            category: categories.category,
            resources: categories.resources.filter((resource) =>
              resource.title.toLowerCase().includes(queryValue.toLowerCase())
            ),
          };
        })
        .filter((category) => category.resources.length > 0);
      return resourceListCopy;
    }
  };
</script>

<section>
  <search class="search-form">
    <input
      class="search-input"
      type="search"
      id="search-resources"
      name="query"
      on:search={searchResource}
    />
    <button class="search-btn link-container" on:click={searchResource}
      >Buscar</button
    >
  </search>
  {#each resourceListCopy as resourceItem}
    <h1>{resourceItem.category}</h1>
    <ul class="links-list">
      {#each resourceItem.resources as resource}
        <li class="link-container link">
          <slot name="animated-title" />
          <a class="network-link" target="_blank" href={resource.link}>
            <span>{resource.title}</span>
          </a>
        </li>
      {/each}
    </ul>
  {/each}
</section>

<style>
  .search-form {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: 15px;
  }

  .search-input {
    border-radius: 5px;
    border: none;
    padding: 0px 5px;
    min-width: calc(100% - 81px);
    min-height: 30px;
  }

  .links-list {
    list-style: none;
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .search-btn {
    background: #004aad;
    color: #fff;
  }

  .link {
    background: #fff1;
    color: #fff;
  }

  .link-container {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    gap: 10px;
    box-shadow: 0px 4px 0px 0px rgb(255 255 255 / 12%);
  }

  .link-container span {
    color: #fff;
  }

  @media (max-width: 800px) {
    .links-list {
      grid-template-columns: 1fr;
    }
  }
</style>
