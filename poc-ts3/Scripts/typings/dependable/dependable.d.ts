// Type definitions for dependable@0.2.5
// Project: http://www.tenengroup.com
// Definitions by: Gal Weiss - gal.w@tenengroup.com
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/**
 * dependable for TypeScript
 *
 * v0.2.5 October 2012
 * Copyright(c) 2014 by Tenengroup. All Rights Reserved.
 * http://www.tenengroup.com
 *
 * Licensed with commercial and non-commercial attributes,
 * specifically: http://www.tenengroup.com/
 *
 * TypeScript is a Microsoft product: www.typescriptlang.org
 *
 */

/**
 * @author <a href="mailto:gal.w@tenengroup.com">Gal Weiss</a>
 * @version 0.2.5
 */

declare module "dependable" {
    export function container() : IContainer;
}
interface IContainer{
    register(dependenciesMap : any) : any;
    get<T>(dependencyName : string) : T;
}