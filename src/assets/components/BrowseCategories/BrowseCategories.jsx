import React from 'react'
import './BrowseCategories.css'
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined'; // Replace with correct import
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import { Link } from 'react-router-dom';
function BrowseCategories() {
    const iconMap = {
        HeadphonesOutlinedIcon: HeadphonesOutlinedIcon,
        WatchOutlinedIcon: WatchOutlinedIcon,
        LaptopMacOutlinedIcon: LaptopMacOutlinedIcon,
        PhoneIphoneOutlinedIcon: PhoneIphoneOutlinedIcon
      };

    const categories = [{
        id: 1,
        name: "Headphones",
        image: "HeadphonesOutlinedIcon"
    },
    {
        id: 2,
        name: "Watches",
        image: "WatchOutlinedIcon"
    },
    {
        id: 3,
        name: "Laptops",
        image: "LaptopMacOutlinedIcon"
    },
    {
        id: 4,
        name: "Phones",
        image: "PhoneIphoneOutlinedIcon"
    } 
]
  return (
    <div className='cotainer'>
        <div className="categories">
            {categories.map((category) => {
                const IconComponent = iconMap[category.image];
            return(
                <div className="category" key={category.id}>
                    <Link to={"/"+category.name.toLowerCase()}>
                    <div className="category-content">
                    <IconComponent className="category-icon" />
                    <h3>{category.name}</h3>
                    </div>
                    </Link>
                </div>
            )
    })}
        </div>
    </div>
  )
}

export default BrowseCategories
