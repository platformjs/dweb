export default class ComponentFactor {
    create(parent, meta) {
        const Clazz = function() {};
        const obj = new Clazz();
        parent.addComponents(obj);
        
        if (meta.props.extend) {
            //
        }

        if (meta.layout) {
            //
        }
        
        if (meta.components) {
            meta.components.forEach(subComponentMeta => {
                this.create(obj, subComponentMeta)
            });
        }
        return obj;
    }
}