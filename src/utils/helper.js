

export const filterRestaurant = (restaurantData, searchInput) =>{
        const initialData = restaurantData.filter((d) => d.info.name.toLowerCase().includes(searchInput.toLowerCase()));
        return initialData;
    }