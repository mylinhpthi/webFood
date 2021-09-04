import React from 'react'
import useAxios from "axios-hooks";
import CollectionItem from './CollectionItem';
function CollectionView() {
    const [{ data, loading, error }] = useAxios('LinkCollection/5');
    const success = !loading && !error;
    const hasLink = data != null ;
    const renderOwnerLink = () =>(
        <CollectionItem id ={data.id} avatartURL={data.avatartURL} title = {data.title} webLinks = {data.webLinks} />
            
    );
    return (
        <div>
  
        {loading && <em>Loading....</em>}
        {error && <em>An error occurs, try again</em>}
        {success && !hasLink && <em>No data</em>}
        {
            success && hasLink && renderOwnerLink()
        }
        </div>
    )
}

export default CollectionView
