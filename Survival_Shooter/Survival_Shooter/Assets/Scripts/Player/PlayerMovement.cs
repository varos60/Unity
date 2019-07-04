using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    public float speed = 6f;

    Vector3 movement;
    Animator anim;
    Rigidbody playerRigidbody;
    int floorMask;
    //float camRayLength = 100f;
    public VJHandler joystick_izquierdo;
    public VJHandler joystick_derecho;

    void Awake()
    {
        floorMask = LayerMask.GetMask("Floor");
        anim = GetComponent<Animator>();
        playerRigidbody = GetComponent<Rigidbody>();
    }

    void FixedUpdate()
    {
        //float h = Input.GetAxisRaw("Horizontal");
        //float v = Input.GetAxisRaw("Vertical");
        float h = joystick_izquierdo.InputDirection.x;
        float v = joystick_izquierdo.InputDirection.y;                

        Move(h, v);
        Turning();
        Animating(h, v);
    }

    void Move(float h, float v)
    {
        movement.Set(h, 0f, v);
        movement = movement.normalized * speed * Time.deltaTime;

        playerRigidbody.MovePosition(transform.position + movement);
    }

    /*void Turning()
    {
        Ray camRay = Camera.main.ScreenPointToRay(Input.mousePosition);        
        RaycastHit floorHit;
        Debug.DrawRay(camRay.origin, camRay.direction, Color.yellow);            

        if (Physics.Raycast(camRay, out floorHit, camRayLength, floorMask))
        {
            Vector3 playerToMouse = floorHit.point - transform.position;                        
            playerToMouse.y = 0f;
            Quaternion newRotation = Quaternion.LookRotation(playerToMouse);            
            playerRigidbody.MoveRotation(newRotation);            
        }
    }*/

    void Turning()
    {
        Vector3 direction = new Vector3(joystick_derecho.InputDirection.x, 0, joystick_derecho.InputDirection.y);
        if (direction != Vector3.zero)
        {
            Vector3 playerToMouse = direction;
            playerToMouse.y = 0f;            
            Quaternion newRotation = Quaternion.LookRotation(playerToMouse, Vector3.up);            
            playerRigidbody.MoveRotation(newRotation);
        }
    }

    void Animating(float h, float v)
    {
        bool walking = h != 0f || v != 0f;
        anim.SetBool("IsWalking", walking);
    }
}
