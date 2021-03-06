# popupElement

Popup elements allow users to author popups, using multiple elements such as tabular views, string description, media (charts and images), and attachments of the attributes and control the order in which they appear. Specifically, popupElements do the following: 1) provide the ability to explicitly add a field/ value table in addition to a description, 2) allow adding multiple description elements, and 3) allow a user to author and consume elements of a popup in the order of their choosing.

### Properties

| Property | Details
| --- | ---
| displayType | This property applies to elements of type `attachments`. A string value indicating how to display the attachment. Possible values are, `preview`, and `list`. If `list` is specified, attachments show as links.
| [fieldInfos](fieldInfo.md) | This property applies to elements of type `fields`.  It is an array of [popupInfo.fieldInfo](fieldInfo.md) objects representing a field/value pair displayed as a table within the popupElement. If the `fieldInfos` property is not provided, the popupElement will display whatever is specified directly in the [popupInfo.fieldInfos](popupInfo.md) property.
| [mediaInfos](mediaInfo.md) | This property applies to elements of type `media`. An array of [popupInfo.mediaInfo](popupInfo.md) objects representing an image or chart for display. If no `mediaInfos` property is provided, the popupElement will display whatever is specified in the [popupInfo.mediaInfo](popupInfo.md) property.
| text | This property applies to elements of type `text`. This is string value indicating the text to be displayed within the popupElement. If no `text` property is provided, the popupElement will display whatever is specified in the [popupInfo.description](popupInfo.md) property.
| type | String value indicating which elements to use.<br>If property is present, must be one of the following values: <ul><li>`text`</li><li>`fields`</li><li>`media`</li><li>`attachments`</li></ul>


### Additional information

Each popupElement has a `type` property. This string value indicates the type of popupElement used.

### Example

```json
{
  "popupElements": [
    {
      "type": "text",
      "text": "Some descriptive text describing the popup."
    },
    {
      "type": "fields",
      "fieldInfos": []
    },
    {
      "type": "media",
      "mediaInfos": []
    },
    {
      "type": "attachments",
      "displayType": "list"
    }
  ]
}
```

