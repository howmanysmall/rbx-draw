/**
 * Debug drawing library useful for debugging 3D abstractions. One of
 * the more useful utility libraries.
 *
 * These functions are incredibly easy to invoke for quick debugging.
 * This can make debugging any sort of 3D geometry really easy.
 *
 * This library should not be used to render things in production for
 * normal players, as it is optimized for debug experience over performance.
 *
 * @see https://quenty.github.io/NevermoreEngine/api/Draw/
 *
 * @example
 * //  A sample of a few API uses
 * Draw.point(Vector3.zero);
 * Draw.terrainCell(Vector3.zero);
 * Draw.cframe(CFrame.new(0, 10, 0));
 * Draw.text(Vector3.new(0, -10, 0), "Testing!");
 *
 * @author Quenty
 */
declare namespace Draw {
	/**
	 * Sets the Draw's drawing color.
	 * @param color The color to set.
	 */
	export function setColor(color: Color3): void;

	/**
	 * Resets the drawing color.
	 */
	export function resetColor(): void;

	/**
	 * Sets the Draw library to use a random color.
	 */
	export function setRandomColor(): void;

	/**
	 * Draws a ray for debugging.
	 * @example
	 * Draw.ray(new Ray(Vector3.zero, new Vector3(0, 10, 0)));
	 *
	 * @param ray
	 * @param color Optional color to draw in
	 * @param parent Optional parent
	 * @param meshDiameter Optional mesh diameter
	 * @param diameter Optional diameter
	 */
	export function ray(
		ray: Ray,
		color?: Color3,
		parent?: Instance,
		meshDiameter?: number,
		diameter?: number,
	): BasePart;

	/**
	 * Updates the rendered ray to the new color and position.
	 * Used for certain scenarios when updating a ray on
	 * RenderStepped would impact performance, even in debug mode.
	 *
	 * @example
	 * const drawn = Draw.ray(new Ray(Vector3.zero, new Vector3(0, 10, 0)));
	 * RunService.Heartbeat.Connect(() => {
	 * 	const newRay = new Ray(Vector3.zero, new Vector3(0, 10*math.sin(tick()), 0));
	 * 	Draw.updateRay(drawn, newRay, new Color3(1, 0.5, 0.5));
	 * });
	 *
	 * @param part
	 * @param ray
	 * @param color
	 */
	export function updateRay(part: BasePart, ray: Ray, color?: Color3): void;

	/**
	 * Render text in 3D for debugging. The text container will
	 * be sized to fit the text.
	 *
	 * @param adornee
	 * @param text
	 * @param color
	 */
	export function text(adornee: Instance, text: string, color?: Color3): BillboardGui;
	export function text(adornee: Vector3, text: string, color?: Color3): Attachment;

	/**
	 * Renders a sphere at the given point in 3D space.
	 * Great for debugging explosions and stuff.
	 * @param position Position of the sphere
	 * @param radius Radius of the sphere
	 * @param color Optional color
	 * @param parent Optional parent
	 */
	export function sphere(position: Vector3, radius: number, color?: Color3, parent?: Instance): BasePart;

	/**
	 * Draws a point for debugging in 3D space.
	 * @param position
	 * @param color
	 * @param parent
	 * @param diameter
	 */
	export function point(position: CFrame | Vector3, color?: Color3, parent?: Instance, diameter?: number): BasePart;

	/**
	 * Renders a point with a label in 3D space.
	 *
	 * @alias {@link labelledPoint}
	 * @param position
	 * @param label
	 * @param color
	 * @param parent
	 */
	export function labeledPoint(
		position: CFrame | Vector3,
		label: string,
		color?: Color3,
		parent?: Instance,
	): BasePart;

	/**
	 * Renders a point with a label in 3D space.
	 *
	 * @alias {@link labeledPoint}
	 * @param position
	 * @param label
	 * @param color
	 * @param parent
	 */
	export function labelledPoint(
		position: CFrame | Vector3,
		label: string,
		color?: Color3,
		parent?: Instance,
	): BasePart;

	/**
	 * Renders a CFrame in 3D space. Includes each axis.
	 * @param cframe
	 */
	export function cframe(cframe: CFrame): Model;

	/**
	 * Draws a part in 3D space
	 * @param template
	 * @param cframe
	 * @param color
	 * @param transparency
	 */
	export function part(template: BasePart, cframe: CFrame, color?: Color3, transparency?: number): BasePart;

	/**
	 * Renders a box in 3D space. Great for debugging bounding boxes.
	 * @param cframe CFrame of the box
	 * @param size Size of the box
	 * @param color Optional Color3
	 */
	export function box(cframe: CFrame | Vector3, size: Vector3, color?: Color3): BasePart;

	/**
	 * Renders a region3 in 3D space.
	 * @param region3 Region3 to render
	 * @param color Optional color3
	 */
	export function region3(region3: Region3, color?: Color3): BasePart;

	/**
	 * Renders a terrain cell in 3D space. Snaps the position
	 * to the nearest position.
	 * @param position
	 * @param color
	 */
	export function terrainCell(position: Vector3, color?: Color3): BasePart;

	/**
	 * Draws the a line from `pointA` to `pointB`.
	 * @param pointA
	 * @param pointB
	 * @param parent
	 * @param color
	 */
	export function screenPointLine(pointA: Vector2, pointB: Vector2, parent?: Instance, color?: Color3): Frame;
	export function screenPointLine(pointA: Vector3, pointB: Vector3, parent?: Instance, color?: Color3): Frame;

	/**
	 * Draws a point on the screen.
	 * @param position The position of the point.
	 * @param parent
	 * @param color
	 * @param diameter
	 */
	export function screenPoint(
		position: Vector2 | Vector3,
		parent?: Instance,
		color?: Color3,
		diameter?: number,
	): Frame;

	/**
	 * Draws a vector in 3D space.
	 *
	 * @example
	 * Draw.vector(Vector3.zero, Vector3.yAxis)
	 *
	 * @param position
	 * @param direction
	 * @param color
	 * @param parent
	 * @param meshDiameter
	 */
	export function vector(
		position: Vector3,
		direction: Vector3,
		color?: Color3,
		parent?: Instance,
		meshDiameter?: number,
	): BasePart;

	/**
	 * Draws a ring in 3D space.
	 *
	 * @example
	 * Draw.ring(Vector3.zero, Vector3.yAxis, 10)
	 *
	 * @param ringPosition Position of the center of the ring.
	 * @param ringNormal Direction of the ring.
	 * @param ringRadius Radius for the ring
	 * @param color Optional color
	 * @param parent Optional instance
	 */
	export function ring(
		ringPosition: Vector3,
		ringNormal: Vector3,
		ringRadius: number,
		color?: Color3,
		parent?: Instance,
	): Folder;

	/**
	 * Retrieves the default parent for the current execution context.
	 */
	export function getDefaultParent(): Instance;
}

export = Draw;
