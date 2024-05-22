export const getFields = (interfaceName: string) => {
    if (interfaceName == 'product') {
      return [
        {
          label: 'name',
          name: 'name',
          type: 'input',
          inputType: 'text'
        },
        {
            label: 'imageUrl',
            name: 'imageUrl',
            type: 'input',
            inputType: 'file',
        },
        {
          label: 'description',
          name: 'description',
          type: 'input',
          inputType: 'text',
        },
        {
            label: 'category',
            name: 'category',
            type: 'select',
            options: [
              {
                key: 'Select one category ...',
                value: '',
              },
              {
                key: 'Céréale',
                value: 'cereale',
              },
              {
                key: 'Oléagineux',
                value: 'oleagineux',
              },
              {
                key: 'Légumineux',
                value: 'legumineux',
              },
              {
                key: 'fruit',
                value: 'fruit',
              },
            ]
        }
      ]
    }
    if (interfaceName == 'service') {
      return [
        {
          label: 'title',
          name: 'title',
          type: 'input',
          inputType: 'text',
        },
        {
          label: 'description',
          name: 'description',
          type: 'input',
          inputType: 'text',
        },
        {
            label: 'imageUrl',
            name: 'imageUrl',
            type: 'input',
            inputType: 'file',
        },
      ]
    }
    if (interfaceName == 'slider') {
      return [
        {
          label: '',
          name: '',
          type: 'input',
          inputType: 'text',
        },
        
      ]
    }
    
  
    return []
  }
  
  
  
  export const removeStringFromArray = (
    array: string[],
    target: string
  ): string[] => {
    return array.filter((item) => item.toLowerCase() !== target.toLowerCase())
  }
  export const getKeys = (data: any) => {
    try {
      let result = Object.keys(data)
      const excludes = [
        '_id',
        'PASSWORD',
        'content',
        'FILEURLS',
        'CREATED_AT',
        'UPDATED_AT',
        '_V',
        'clientid',
        'CLIENTSECRET',
        'AUTHOR',
        '__V',
        'GRANTS',
        'REDIRECTURIS',
        'FRIEND_COUNT',
        'IS_MY_FRIEND',
        'REQUEST_RECEIVED',
        'REQUEST_SENDED',
        'ROLES',
        'ADDRESSES',
        'TAGS',
        'ONLINE',
        'ISVERIFIED',
        'RECEIVEPROMOMESSAGE',
        'CREATED_FORMATTED_WITH_TIME_SINCE',
      ]
  
      excludes.forEach((elt) => {
        result = removeStringFromArray(result, elt)
      })
      result.push('created_at')
      result.push('updated_at')
  
      return result
    } catch (error) {
      console.log(error)
  
      return []
    }
  }
  