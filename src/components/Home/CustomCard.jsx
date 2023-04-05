import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StorageIcon from '@mui/icons-material/Storage';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import './CustomCard.css'

const CustomCard = (props) => {
    return (
        
      <div id='cards'>
        {
          (props.icon == "DirectionsBoatIcon") ? <DirectionsBoatIcon /> : 
          ((props.icon == "AllInboxIcon") ? <AllInboxIcon /> : 
          ((props.icon == "WarehouseIcon") ? <WarehouseIcon /> : 
          (props.icon == "LocalShippingIcon") ? <LocalShippingIcon /> : 
          (props.icon == "StorageIcon") ? <StorageIcon /> :
          <AccountTreeIcon />
          ))
          
        }
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.content}</p>
        </div>
      </div>
 
    )
  }

  export default CustomCard;