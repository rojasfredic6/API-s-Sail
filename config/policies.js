/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  // '*': true,
  RideController:{
    '*': 'isLoggedIn'
    // 'create' : 'isLoggedIn' => esto hace referencia a que solo los enpoints con create tendran la verificacion en el RideController, puede ser cambiado por 'update', 'delete', 'put'
    // Todas las rutas asociadas al archivo RideController en controllers, estaran sujetos
    // a la verificacion con el polices isLoggedIn de la carpeta ./policies
  }

};
