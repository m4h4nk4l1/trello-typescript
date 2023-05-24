import React, { useState } from "react"

export const AddNewItem = (props: AddNewItemProps) => {
    const [showForm, setShowForm] = useState(false);
    const { onAdd, toggleButtonText, dark } = props;
    if (showForm) {
    // We show item creation form here
    }
    return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
    {toggleButtonText}
    </AddItemButton>
    )
    }