export default function bindCache(self)
{
    return ((f, ...args) =>
    {
        if (typeof f == 'string')
        {
            if (!self[f])
            {
                throw new Error('this.'+f+' not found');
            }
            f = self[f];
        }
        if (!args.length)
        {
            return f;
        }
        let r = f['_'+args.join('|')];
        if (!r)
        {
            r = f['_'+args.join('|')] = (...p) => f(...args, ...p);
        }
        return r;
    });
}