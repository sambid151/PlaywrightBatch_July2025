export class BasePage{

    
    constructor(page)
    {
        this.page=page
    }

    async waitForNewPage(context,triggerFn,timeout=5000)
    {
        const [newPage]= await Promise.all([
        context.waitForEvent('page',{timeout}),
        triggerFn()

    ])
        return newPage

    }

    async acceptAlerts(page,action,altertext=''){
       
        page.on('dialog',async(dialog)=>
        {
            if(action=="accept")
            {
            await dialog.accept(altertext);
            }
            else
            {
                await dialog.dismiss();
            }
            

        })
    }

}